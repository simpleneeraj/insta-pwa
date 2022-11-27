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

const ScreenBackgrounds = () => {
  return (
    <View>
      <IonSegment mode="ios" value={"Hello"}>
        <IonSegmentButton>Wallpapers</IonSegmentButton>
        <IonSegmentButton>Hello</IonSegmentButton>
        <IonSegmentButton>Gradients</IonSegmentButton>
      </IonSegment>
      <IonSearchbar mode="ios" />
      <IonList className={css.Default}>
        {/* <ImagePicker /> */}
        {wall.map((d, i) => (
          <div className={css.Items}>
            <img loading="lazy" src={d.small} alt="im" />
          </div>
        ))}
      </IonList>
    </View>
  );
};
export default React.memo(ScreenBackgrounds);
