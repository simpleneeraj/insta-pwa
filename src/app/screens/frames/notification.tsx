import { FrameProps } from "./types";
import css from "./css/notification.module.scss";

const IosNotification = (props: FrameProps) => {
  const { message, title, notificationProps } = props;
  return (
    <div className={css.container}>
      <div className={css.top}>
        <img src={notificationProps?.appIcon} alt="notification-icon" />
        <p style={{ fontSize: 14 }}>{notificationProps?.appName}</p>
        <p style={{ fontSize: 14 }}>{notificationProps?.timestamp}</p>
      </div>
      <div className={css.Title}>
        <p>{title}</p>
      </div>
      <div className={css.Text}>
        <p>{message}</p>
      </div>
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
