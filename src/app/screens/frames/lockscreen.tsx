import { FrameProps } from "./types";
import IosNotification from "./notification";
import css from "./css/lockscreen.module.scss";

const LockScreen = ({ lockScreenProps: l, ...rest }: FrameProps) => {
  return (
    <div className={css.LockScreen}>
      <div className={css.Time}>
        <p>{l?.hours}</p>
        <span>:</span>
        <p>{l?.minutes}</p>
      </div>
      <div className={css.Dates}>
        <p>{`${l?.days}, ${l?.months} ${l?.dayNumber}`}</p>
      </div>
      <IosNotification {...rest} />
    </div>
  );
};

export default LockScreen;
