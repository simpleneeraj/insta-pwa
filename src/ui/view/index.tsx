import React from "react";

type Ref = React.Ref<HTMLDivElement>;
type Props = React.ComponentPropsWithRef<"div">;

const View = React.forwardRef((props: Props, ref: Ref) => {
  return React.createElement("div", { ref, ...props });
});

export default View;
