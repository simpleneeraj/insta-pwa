import React from "react";
import View from "ui/view";

type Props = React.ComponentProps<typeof View>;

interface ViewContainerProps extends Props {}
const ViewContainer = ({ children, style, ...rest }: ViewContainerProps) => {
  const baseStyle = {
    padding: "4px",
    ...style,
  } as React.CSSProperties;
  return (
    <View style={baseStyle} {...rest}>
      {children}
    </View>
  );
};
export default ViewContainer;
