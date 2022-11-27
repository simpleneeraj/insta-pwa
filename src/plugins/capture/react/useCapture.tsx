import React from "react";
import attID from "../utils/attid";
import delay from "../utils/delay";
import download from "../fileSaver";
import randomName from "../main/randomname";
import { CaptureOptions } from "../options";
import createCanvas from "../main/createcanvas";

const useScreenshot = () => {
  const [l, load] = React.useState(false);
  // capture Handler as Simple as That
  const captureHandler = React.useCallback(
    async (options: CaptureOptions): Promise<void> => {
      // For SSR
      if (typeof document === "undefined") {
        return;
      }
      const element = document.querySelector(
        `[data-capture=${attID}]`
      ) as HTMLElement;
      const { imageFormat, delay: exportDelay = 0, fileName } = options;
      load(true);
      try {
        await delay(exportDelay);
        const canvas = await createCanvas(element, options);
        canvas.toBlob(async (blob: Blob) => {
          download(blob, fileName || randomName(imageFormat));
        }, `image/${imageFormat}`);
        load(false);
      } catch (error) {
        load(false);
        console.log(error);
      }
    },
    []
  );

  /**
   * A basic handler to download image it's so simple and effective
   * @param options - ScreenshotOptions for customize your output image
   */
  const captureImage = React.useMemo(() => captureHandler, [captureHandler]);

  return { captureImage, isLoading: l };
};

export default useScreenshot;
