import { IonItem, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import mode from "mode";

const data = [
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Center",
    value: "center",
  },
  {
    label: "Right",
    value: "right",
  },
  {
    label: "Justify",
    value: "justify",
  },
];

interface TextAlignmentProps extends React.ComponentProps<typeof IonSegment> {}

const TextAlignment = ({ ...rest }: TextAlignmentProps) => {
  return (
    <IonItem lines="full" mode={"ios"}>
      <IonSegment {...rest}>
        {data.map((data, index) => (
          <IonSegmentButton key={index} value={data.value}>
            <IonLabel>{data.label}</IonLabel>
          </IonSegmentButton>
        ))}
      </IonSegment>
    </IonItem>
  );
};

export default TextAlignment;
