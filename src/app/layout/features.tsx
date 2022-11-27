import React from "react";
import Screens from "app/screens";
import useTabs from "store/hooks/use-tabs";
import LoadingScreen from "app/screens/loading";
import View from "ui/view";
import css from "app/style/app.module.scss";

const Features = () => {
  const { tabState } = useTabs();

  return (
    <View className={css["features-container"]}>
      <React.Suspense fallback={<LoadingScreen />}>
        <Screens tabsName={tabState.tabName} />
      </React.Suspense>
    </View>
  );
};
export default Features;
