import { FrameProps } from "./types";
import css from "./css/reminder.module.scss";

const Reminder = ({ message, title }: FrameProps) => {
  return (
    <>
      <div className={css.Reminder}>
        <div className={css.Top}>
          <p style={{ fontSize: 16 }}>Reminder</p>
        </div>
        <div className={css.Middle}>
          <p>{message}</p>
        </div>
        <div className={css.Bottom}>
          <p style={{ fontSize: 16 }}>{title}</p>
        </div>
      </div>
    </>
  );
};

export default Reminder;
