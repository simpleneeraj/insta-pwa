import View from "ui/view";
import { IonIconProps } from "typings/ion";
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonRange,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React from "react";
import useCustomization from "store/hooks/use-customization";
import { HexAlphaColorPicker, RgbColorPicker } from "plugins/color-picker";

const CardCustomization = () => {
  const [tab, setTab] = React.useState<string | null | undefined>("alpha");
  const { customizationState, customizationCard } = useCustomization();

  const RenderSlider = React.useMemo(() => {
    switch (tab) {
      case "alpha":
        return (
          <IonRange
            min={0}
            max={100}
            step={1}
            name="alpha"
            value={customizationState.cardStyle["alpha"]}
            onIonChange={({ target }) =>
              customizationCard(target.name, Number(target.value))
            }
          >
            <IonLabel slot="start">
              <p>Alpha</p>
            </IonLabel>
            <IonLabel slot="end">
              <p>{customizationState.cardStyle["alpha"]}</p>
            </IonLabel>
          </IonRange>
        );
      case "blur":
        return (
          <IonRange
            min={0}
            max={30}
            step={1}
            name="blur"
            value={customizationState.cardStyle["blur"]}
            onIonChange={({ target }) =>
              customizationCard(target.name, Number(target.value))
            }
          >
            <IonLabel slot="start">
              <p>Blur</p>
            </IonLabel>
            <IonLabel slot="end">
              <p>{customizationState.cardStyle["blur"]}px</p>
            </IonLabel>
          </IonRange>
        );
      case "round":
        return (
          <IonRange
            min={0}
            max={30}
            step={1}
            name="round"
            value={customizationState.cardStyle["round"]}
            onIonChange={({ target }) =>
              customizationCard(target.name, Number(target.value))
            }
          >
            <IonLabel slot="start">
              <p>Round</p>
            </IonLabel>
            <IonLabel slot="end">
              <p>{customizationState.cardStyle["round"]}px</p>
            </IonLabel>
          </IonRange>
        );

      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customizationState.cardStyle, tab]);

  // const color=React.

  return (
    <View>
      <IonItem lines="none">
        <IonSegment value={tab} onIonChange={(e) => setTab(e.target.value)}>
          {data.map((data, index) => (
            <IonSegmentButton title={data.value} key={index} value={data.value}>
              {<data.icon size="small" />}
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonItem>
      <IonItem>{RenderSlider}</IonItem>
      <HexAlphaColorPicker
        color={customizationState.cardStyle["background-color"]}
        onChange={(value) => customizationCard("background-color", value)}
      />
    </View>
  );
};
export default CardCustomization;

const data = [
  {
    label: "E",
    value: "alpha",
    icon: (props: IonIconProps) => (
      <IonIcon
        icon={`data:image/svg+xml,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2V6a6 6 0 1 1 0 12z"/></svg>
`}
        {...props}
      />
    ),
  },
  {
    label: "F",
    value: "blur",
    icon: (props: IonIconProps) => (
      <IonIcon
        icon={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3.1L7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 1 1-12.728 0L12 .272z"/></svg>`}
        {...props}
      />
    ),
  },
  {
    label: "I",
    value: "round",
    icon: (props: IonIconProps) => (
      <IonIcon
        icon={`
      data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 19v2h-2v-2h2zm-4 0v2h-2v-2h2zm-4 0v2h-2v-2h2zm-4 0v2H7v-2h2zm-4 0v2H3v-2h2zm16-4v2h-2v-2h2zM5 15v2H3v-2h2zm0-4v2H3v-2h2zm11-8c2.687 0 4.882 2.124 4.995 4.783L21 8v5h-2V8c0-1.591-1.255-2.903-2.824-2.995L16 5h-5V3h5zM5 7v2H3V7h2zm0-4v2H3V3h2zm4 0v2H7V3h2z"/></svg>
      `}
        {...props}
      />
    ),
  },
];
