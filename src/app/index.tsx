import { lazy, memo } from "react";
import css from "app/style/app.module.scss";
import View from "ui/view";

const SideBar = lazy(async () => await import("app/layout/sidebar"));
const Center = lazy(async () => await import("app/layout/center"));
const Features = lazy(async () => await import("app/layout/features"));

const App = () => {
  return (
    <View className={css["container"]}>
      <View className={css["app-container"]}>
        <View className={css["sidebar"]}>
          <SideBar />
        </View>
        <View className={css["center"]}>
          <Center />
        </View>
        <View className={`${css["features"]}`}>
          <Features />
        </View>
      </View>
    </View>
  );
};

export default memo(App);
