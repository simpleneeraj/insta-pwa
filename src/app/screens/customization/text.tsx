import View from "ui/view";
import { IonIconProps } from "typings/ion";
// import { add, remove } from "ionicons/icons";
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

const TextCustomization = () => {
  const [tab, setTab] = React.useState<string | null | undefined>("font-size");
  const { customizationState, customizationText } = useCustomization();

  const RenderSlider = React.useMemo(() => {
    switch (tab) {
      case "font-size":
        return (
          <IonRange
            min={0}
            max={30}
            step={0.5}
            mode="ios"
            name="font-size"
            value={customizationState.textStyle["font-size"]}
            onIonChange={({ target }) =>
              customizationText(target.name, Number(target.value).toFixed(1))
            }
          >
            <IonLabel slot="start">
              <p>Size</p>
            </IonLabel>
            <IonLabel slot="end">
              <p>{customizationState.textStyle["font-size"]}px</p>
            </IonLabel>
          </IonRange>
        );
      case "font-weight":
        return (
          <IonRange
            min={100}
            max={900}
            step={100}
            snaps={true}
            mode="ios"
            name="font-weight"
            value={customizationState.textStyle["font-weight"]}
            onIonChange={({ target }) =>
              customizationText(target.name, target.value as any)
            }
          >
            <IonLabel slot="start">
              <p>Weight</p>
            </IonLabel>
            <IonLabel slot="end">
              <p>{customizationState.textStyle["font-weight"]}</p>
            </IonLabel>
          </IonRange>
        );
      case "line-height":
        return (
          <IonRange
            min={0}
            max={5}
            step={0.1}
            mode="ios"
            name="line-height"
            value={customizationState.textStyle["line-height"]}
            onIonChange={({ target }) =>
              customizationText(target.name, Number(target.value)?.toFixed(1))
            }
          >
            <IonLabel slot="start">
              <p>Height</p>
            </IonLabel>
            <IonLabel slot="end">
              <p>{customizationState.textStyle["line-height"]}</p>
            </IonLabel>
          </IonRange>
        );
      case "letter-spacing":
        return (
          <IonRange
            min={0}
            max={5}
            step={0.1}
            mode="ios"
            name="letter-spacing"
            value={customizationState.textStyle["letter-spacing"]}
            onIonChange={({ target }) =>
              customizationText(target.name, Number(target.value)?.toFixed(1))
            }
          >
            <IonLabel slot="start">
              <p>Height</p>
            </IonLabel>
            <IonLabel slot="end">
              <p>{customizationState.textStyle["letter-spacing"]}px</p>
            </IonLabel>
          </IonRange>
        );
      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customizationState.textStyle, tab]);

  return (
    <View>
      <IonItem lines="none" mode="ios">
        <IonSegment value={tab} onIonChange={(e) => setTab(e.target.value)}>
          {data.map((data, index) => (
            <IonSegmentButton title={data.value} key={index} value={data.value}>
              {<data.icon size="small" />}
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonItem>
      <IonItem mode="ios">{RenderSlider}</IonItem>
    </View>
  );
};
export default TextCustomization;

const data = [
  {
    label: "A",
    value: "font-size",
    icon: (props: IonIconProps) => (
      <IonIcon
        icon={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93zM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
        `}
        {...props}
      />
    ),
  },
  {
    label: "B",
    value: "font-weight",
    icon: (props: IonIconProps) => (
      <IonIcon
        icon={`data:image/svg+xml,
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"/></svg>
        `}
        {...props}
      />
    ),
  },
  {
    label: "C",
    value: "line-height",
    icon: (props: IonIconProps) => (
      <IonIcon
        icon={`data:image/svg+xml,
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 4h10v2H11V4zM6 7v4H4V7H1l4-4 4 4H6zm0 10h3l-4 4-4-4h3v-4h2v4zm5 1h10v2H11v-2zm-2-7h12v2H9v-2z"/></svg>
        `}
        {...props}
      />
    ),
  },
  {
    label: "D",
    value: "letter-spacing",
    icon: (props: IonIconProps) => (
      <IonIcon
        icon={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 17h10v-2.5l3.5 3.5-3.5 3.5V19H7v2.5L3.5 18 7 14.5V17zm6-11v9h-2V6H5V4h14v2h-6z"/></svg>`}
        {...props}
      />
    ),
  },
];

{
  /* <IonIcon size="small" slot="start" icon={remove}></IonIcon> */
}
{
  /* <IonIcon size="small" slot="end" icon={add}></IonIcon> */
}
