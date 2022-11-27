import { IonItem, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const data = [
  {
    label: "T",
    value: "initial",
  },
  {
    label: "aa",
    value: "lowercase",
  },
  {
    label: "Aa",
    value: "capitalize",
  },
  {
    label: "AA",
    value: "uppercase",
  },
];

interface Props extends React.ComponentProps<typeof IonSegment> {}

const TextTransform = (props: Props) => {
  return (
    <IonItem lines="full" mode={"ios"}>
      <IonSegment {...props}>
        {data.map((data, index) => (
          <IonSegmentButton key={index} value={data.value}>
            <IonLabel>{data.label}</IonLabel>
          </IonSegmentButton>
        ))}
      </IonSegment>
    </IonItem>
  );
};

export default TextTransform;
