import css from "app/style/center.module.scss";

interface ContainerProps extends React.PropsWithChildren<{}> {}
const BackdropContainer = ({ children }: ContainerProps) => {
  return (
    <div id="Item" className={`${css.BoxContainer}`}>
      {children}
      <div id="BlurContainer" className={`${css.BlurContainer}`}></div>
    </div>
  );
};

export default BackdropContainer;
