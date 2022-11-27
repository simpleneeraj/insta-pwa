import React from "react";
import useCustomization from "store/hooks/use-customization";

const CenterStyle = () => {
  const { customizationState } = useCustomization();
  console.log(customizationState);
  const url = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2luZG93cyUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60`;

  return (
    <style>
      {`
        .container {
          background-color: var(--ion-card-background);
          background: ${url};
          background-image: url(${url});
          background-color: ${url};
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: grid;
          position: relative;
          place-content: center;
          transition: background 0.1s ease-in-out;
        }
        .frame-container {
          display: grid;
          position: relative;
          min-width: 300px;
          max-width: 500px;
          overflow: hidden;
          width: 412px;
          height: 412px;
          transition: height 200ms linear;
        }
        #Item {
          border-radius: 10px;
        }
        #BlurContainer {
          background: linear-gradient(45deg, rgb(0 0 0 / 50%), #00000080),
            url(${url});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          filter: blur(15px);
          height: 412px;
        }
      `}
    </style>
  );
};
export default CenterStyle;
