import React from "react";
import { useCapture } from "plugins/capture";
import {
  IonButton,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  useIonActionSheet,
} from "@ionic/react";
import View from "ui/view";

const ScreenDownload = () => {
  const { captureImage, isLoading } = useCapture();

  // const [present] = useIonActionSheet();

  // const onShow = () => {
  //   present({
  //     header: "Download Image",
  //     // subHeader: "Hello",
  //     mode: "ios",
  //     buttons: [
  //       {
  //         text: "Export",
  //         data: {
  //           action: "share",
  //         },
  //       },
  //       {
  //         text: "Download",
  //         data: {
  //           action: "cancle",
  //         },
  //       },
  //       {
  //         text: "Download",
  //         role: "destructive",
  //         data: {
  //           action: "delete",
  //         },

  //         handler() {
  //           console.log("Hello");
  //         },
  //       },
  //     ],
  //   });
  // };
  return (
    <View>
      <h4>Download Image</h4>
      <IonButton
        onClick={
          () =>
            captureImage({
              imageFormat: "png",
              pixelRatio: 8,
              isDebug: true,
            })
          // onShow()
        }
      >
        {isLoading ? <IonSpinner /> : "Export"}
      </IonButton>
    </View>
  );
};
export default ScreenDownload;
