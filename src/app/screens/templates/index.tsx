import React from "react";
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonSkeletonText,
  IonThumbnail,
} from "@ionic/react";
import mode from "mode";
import { bag } from "ionicons/icons";
import framesArray from "app/constants/frames-array";

const ScreenTemplates = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded && (
        <React.Fragment>
          {framesArray.map((data, index) => (
            <IonList mode="ios" key={index}>
              {/* <IonListHeader>Albums</IonListHeader> */}
              <IonItem>
                <IonThumbnail slot="start">
                  <IonIcon
                    style={{ width: "100%", height: "100%" }}
                    icon={bag}
                  ></IonIcon>
                </IonThumbnail>
                <IonLabel>
                  <h3>{data.name}</h3>
                  <p>Short Description</p>
                  <p>1969</p>
                </IonLabel>
              </IonItem>
            </IonList>
          ))}
        </React.Fragment>
      )}
      {!loaded && (
        <React.Fragment>
          {Array.from(Array(5).keys()).map((_, i) => (
            <IonList mode="ios" key={i}>
              <IonItem>
                <IonThumbnail slot="start">
                  <IonSkeletonText animated={true}></IonSkeletonText>
                </IonThumbnail>
                <IonLabel>
                  <h3>
                    <IonSkeletonText
                      animated={true}
                      style={{ width: "80%" }}
                    ></IonSkeletonText>
                  </h3>
                  <p>
                    <IonSkeletonText
                      animated={true}
                      style={{ width: "60%" }}
                    ></IonSkeletonText>
                  </p>
                  <p>
                    <IonSkeletonText
                      animated={true}
                      style={{ width: "30%" }}
                    ></IonSkeletonText>
                  </p>
                </IonLabel>
              </IonItem>
            </IonList>
          ))}
        </React.Fragment>
      )}
      <IonButton onClick={() => setLoaded(!loaded)}>Toggle</IonButton>
    </>
  );
};
export default React.memo(ScreenTemplates);
