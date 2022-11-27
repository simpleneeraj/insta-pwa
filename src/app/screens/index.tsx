import React from "react";
import delay from "utils/delay";
import LoadingScreen from "./loading";
import ViewContainer from "./elements/container";

const ScreenTemplates = React.lazy(async () => {
  await delay(2000);
  return await import("./templates");
});

const ScreenBackgrounds = React.lazy(async () => {
  await delay(2000);
  return await import("./backgrounds");
});

const ScreenThoughts = React.lazy(async () => {
  await delay(2000);
  return await import("./thoughts");
});

const ScreenCustomization = React.lazy(async () => {
  await delay(2000);
  return await import("./customization");
});

const ScreenDownload = React.lazy(async () => {
  await delay(2000);
  return await import("./download");
});

const ScreenExperiment = React.lazy(async () => {
  await delay(2000);
  return await import("./experiment");
});

const ScreenSettings = React.lazy(async () => {
  await delay(2000);
  return await import("./settings");
});

interface ScreensProps {
  tabsName: string;
}

const Screens = ({ tabsName }: ScreensProps) => {
  switch (tabsName) {
    case "TEMPLATES":
      return (
        <ViewContainer>
          <ScreenTemplates />
        </ViewContainer>
      );
    case "BACKGROUNDS":
      return (
        <ViewContainer>
          <ScreenBackgrounds />;
        </ViewContainer>
      );
    case "THOUGHTS":
      return (
        <ViewContainer>
          <ScreenThoughts />
        </ViewContainer>
      );
    case "CUSTOMIZATION":
      return (
        <ViewContainer>
          <ScreenCustomization />
        </ViewContainer>
      );
    case "DOWNLOAD":
      return (
        <ViewContainer>
          <ScreenDownload />
        </ViewContainer>
      );
    case "EXPERIMENT":
      return (
        <ViewContainer>
          <ScreenExperiment />
        </ViewContainer>
      );
    case "SETTINGS":
      return (
        <ViewContainer>
          <ScreenSettings />
        </ViewContainer>
      );
    default:
      return <LoadingScreen />;
  }
};
export default Screens;
