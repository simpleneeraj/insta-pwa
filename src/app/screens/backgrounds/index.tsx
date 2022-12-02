import css from "app/style/backgrounds.module.scss";
import wall from "lib/Wallpapers.json";
import {
  IonList,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React from "react";
import View from "ui/view";
import useCustomization from "store/hooks/use-customization";

const ScreenBackgrounds = () => {
  const { customizationFrame } = useCustomization();

  return (
    <View>
      <IonSegment
        value={"Hello"}
        style={{
          width: "70%",
        }}
      >
        <IonSegmentButton>Wallpapers</IonSegmentButton>
        <IonSegmentButton>Hello</IonSegmentButton>
        <IonSegmentButton>Gradients</IonSegmentButton>
      </IonSegment>
      <IonSearchbar />
      <IonList className={css.Default}>
        {/* <ImagePicker /> */}
        {wall.map((d, i) => (
          <View
            className={css.Items}
            key={i}
            onClick={() => {
              customizationFrame("background", d.regular);
            }}
          >
            <img loading="lazy" src={d.small} alt="im" />
          </View>
        ))}
      </IonList>
    </View>
  );
};
export default React.memo(ScreenBackgrounds);
