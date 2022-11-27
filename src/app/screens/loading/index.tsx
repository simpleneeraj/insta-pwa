import { IonSpinner } from "@ionic/react";
import View from "ui/view";

const LoadingScreen = () => {
  return (
    <View style={style.container}>
      <IonSpinner name="lines" />
    </View>
  );
};

export default LoadingScreen;

const style = {
  container: {
    flex: "1",
    display: "grid",
    placeContent: "center",
  },
};
