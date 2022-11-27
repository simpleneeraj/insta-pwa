import View from "ui/view";
import TextAlignment from "./text-align";
import TextTransform from "./text-transform";
import useCustomization from "store/hooks/use-customization";
import TextCustomization from "./text";
import CardCustomization from "./card";

const ScreenCustomization = () => {
  const { customizationState, customizationText } = useCustomization();
  return (
    <View>
      {/* <IonToggle slot="end" checked></IonToggle> */}
      <TextAlignment
        value={customizationState.textStyle["text-align"]}
        onIonChange={(e) => customizationText("text-align", e.target.value)}
      />
      <TextTransform
        value={customizationState.textStyle["text-transform"]}
        onIonChange={(e) => customizationText("text-transform", e.target.value)}
      />
      <TextCustomization />
      <CardCustomization />
    </View>
  );
};
export default ScreenCustomization;
