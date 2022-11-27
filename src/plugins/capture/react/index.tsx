import React from "react";
import attID from "../utils/attid";

type E = HTMLDivElement;
interface Props extends React.ComponentPropsWithRef<"div"> {
  "data-capture"?: string;
}

const Capture = React.forwardRef((props: Props, ref: React.Ref<E>) =>
  React.createElement("div", { ref, "data-capture": attID, ...props })
);

export default Capture;
