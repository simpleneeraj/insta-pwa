import View from "ui/view";
import Button from "ui/button";
import useTabs from "store/hooks/use-tabs";
import css from "app/style/sidebar.module.scss";
import sideTabsArray from "app/constants/side-array";

const SideBar = () => {
  const { setTabs, tabState } = useTabs();

  return (
    <View className={css["container"]}>
      <View className={css["button"]}>
        {sideTabsArray.map((data, index) => {
          const color = `var(--ion-color-tertiary-shade)`;
          const active = tabState.tabName.includes(data.value);
          const buttonStyle = {
            backgroundColor: active ? color : "",
            boxShadow: active ? `0px 0px 15px ${color}` : "",
          };
          return (
            <Button
              onClick={() => setTabs(data.value)}
              style={buttonStyle}
              title={data.name}
              key={index}
            >
              {<data.icon mode="ios" />}
            </Button>
          );
        })}
      </View>
    </View>
  );
};
export default SideBar;
