import React from "react";
import { FrameProps } from "./types";
import css from "./css/terminal.module.scss";

const Terminal = ({ title, message }: FrameProps) => {
  return (
    <React.Fragment>
      <div className={css.MacTerminal}>
        <div className={css.Dots}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={css.Text}>
          <p>{title}</p>
          <p>{message}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Terminal;
