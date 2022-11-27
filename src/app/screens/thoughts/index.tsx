import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import thoughts from "lib/thoughts";

function Example() {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonContent>
      <IonList mode="ios">
        {thoughts.map((data, index) => {
          return (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardTitle>{data.author}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{data.content}</IonCardContent>
            </IonCard>
          );
        })}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent />
      </IonInfiniteScroll>
    </IonContent>
  );
}
export default Example;
