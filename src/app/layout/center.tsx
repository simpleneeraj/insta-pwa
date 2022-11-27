import View from "ui/view";
import CenterStyle from "./center-style";
import { Capture } from "plugins/capture";
import RenderFrames from "app/screens/frames";
import css from "app/style/center.module.scss";
import useTemplates from "store/hooks/use-templates";
import useCustomization from "store/hooks/use-customization";
import BackdropContainer from "app/screens/frames/container";

const Center = () => {
  const { templateState } = useTemplates();
  const { customizationState: state } = useCustomization();

  return (
    <View className={css["center-container"]}>
      <Capture className={"frame-container"}>
        <View className={"container"}>
          <BackdropContainer>
            <RenderFrames
              frameName={templateState.name}
              title={state.textContent.title}
              tweetProps={{ ...state.tweet }}
              message={state.textContent.message}
              reminderProps={{ ...state.reminder }}
              lockScreenProps={{ ...state.lockScreen }}
              notificationProps={{ ...state.notification }}
            />
            <CenterStyle />
          </BackdropContainer>
        </View>
      </Capture>
    </View>
  );
};
export default Center;
