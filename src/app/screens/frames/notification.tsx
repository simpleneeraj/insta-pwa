import { FrameProps } from "./types";
import css from "./css/notification.module.scss";

const IosNotification = (props: FrameProps) => {
  const { message, title, notificationProps } = props;
  // 3D Mode
  return (
    <div className={css.container}>
      <div className={css.top}>
        <img src={notificationProps?.appIcon} alt="notification-icon" />
        <p style={{ fontSize: 13 }}>{notificationProps?.appName}</p>
        <p style={{ fontSize: 13 }}>{notificationProps?.timestamp}</p>
      </div>
      <div className={css["content"]}>
        <p>{title}</p>
        <p>{message}</p>
      </div>
      {/* <div className={css.more}>11 more notification</div> */}
    </div>
  );
};

export default IosNotification;

const dataImages = [
  {
    image:
      "https://raw.githubusercontent.com/neerajcodes/dataImages/main/ios/apple-messages.svg",
    iconName: `Messages`,
  },
  {
    Image: `https://raw.githubusercontent.com/neerajcodes/dataImages/main/ios/apple-ibooks.svg`,
    iconName: `Books`,
  },
  {
    Image: `https://raw.githubusercontent.com/neerajcodes/dataImages/main/ios/apple-itunes-store.svg`,
    Title: `Favorite`,
  },
  {
    Image: `https://raw.githubusercontent.com/neerajcodes/dataImages/main/ios/apple-mail.svg`,
    Title: `Mail`,
  },

  {
    Image: `https://raw.githubusercontent.com/neerajcodes/dataImages/main/ios/apple-store.svg`,
    Title: `Store`,
  },
  {
    Image: `https://raw.githubusercontent.com/neerajcodes/dataImages/main/ios/twitter.svg`,
    Title: `Twitter`,
  },
  {
    Image: `https://raw.githubusercontent.com/neerajcodes/dataImages/main/ios/whatsapp.svg`,
    Title: `Whatsapp`,
  },
];
