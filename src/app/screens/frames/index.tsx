import { FrameProps } from "./types";
// LAZY LOADING
import Tweet from "./tweet";
import Reminder from "./reminder";
import Terminal from "./terminal";
import LockScreen from "./lockscreen";
import IosNotification from "./notification";

interface RenderFramesProps extends FrameProps {
  frameName: string;
}

const RenderFrames = ({ frameName, ...rest }: RenderFramesProps) => {
  switch (frameName) {
    case "TERMINAL":
      return <Terminal {...rest} />;
    case "REMINDER":
      return <Reminder {...rest} />;
    case "NOTIFICATION":
      return <IosNotification {...rest} />;
    case "LOCKSCREEN":
      return <LockScreen {...rest} />;
    case "TWEET":
      return <Tweet {...rest} />;
    default:
      return null;
  }
};

export default RenderFrames;
