import React from "react";
import useCustomization from "store/hooks/use-customization";
import backgroundFilter from "utils/background-filter";

const CenterStyle = () => {
  const { customizationState } = useCustomization();
  const { cardStyle, frameStyle, textStyle } = customizationState;
  const background = backgroundFilter(frameStyle.background);
  return (
    <style>
      {`
        .container {
          background-color: var(--ion-card-background);
          background: ${background};
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: grid;
          position: relative;
          place-content: center;
          transition: background 0.1s ease-in-out;
        }
        .frame-container {
          width: 412px;
          height: 412px;
          display: grid;
          position: relative;
          min-width: 300px;
          max-width: 500px;
          overflow: hidden;
          transition: height 200ms linear;
        }
        #Item {
          border-radius: ${cardStyle.round}px;
        }
        #BlurContainer {
          background: linear-gradient(
            ${cardStyle["background-color"]},${cardStyle["background-color"]}),
            ${background};
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          filter: blur(${cardStyle.blur}px);
          height: 412px;
        }
      `}
    </style>
  );
};
export default CenterStyle;
