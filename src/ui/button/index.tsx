import React from "react";

type Ref = React.Ref<HTMLButtonElement>;
type Props = React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef((props: Props, ref: Ref) => {
  return React.createElement("button", { ref, ...props });
});

export default Button;
