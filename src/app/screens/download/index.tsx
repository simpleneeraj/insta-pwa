import React from "react";
import { useCapture } from "plugins/capture";
import {
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  useIonActionSheet,
} from "@ionic/react";

const ScreenDownload = () => {
  const { captureImage, isLoading } = useCapture();

  const [present] = useIonActionSheet();

  const onShow = () => {
    present({
      header: "Download Image",
      // subHeader: "Hello",
      mode: "ios",
      buttons: [
        {
          text: "Export",
          data: {
            action: "share",
          },
        },
        {
          text: "Download",
          data: {
            action: "cancle",
          },
        },
        {
          text: "Download",
          role: "destructive",
          data: {
            action: "delete",
          },

          handler() {
            console.log("Hello");
          },
        },
      ],
    });
  };
  return (
    <div>
      <button
        onClick={
          () =>
            captureImage({
              imageFormat: "png",
              pixelRatio: 4,
              isDebug: true,
            })
          // onShow()
        }
      >
        {isLoading ? "Exporting..." : "Export"}
      </button>
      <IonList>
        <IonItem>
          <IonSelect mode="ios" placeholder="Choose Image Format">
            <IonSelectOption value={"png"}>PNG</IonSelectOption>
            <IonSelectOption value={"jpg"}>JPG</IonSelectOption>
            <IonSelectOption value={"webp"}>WEBP</IonSelectOption>
            <IonSelectOption value={"svg"}>SVG</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
    </div>
  );
};
export default ScreenDownload;
