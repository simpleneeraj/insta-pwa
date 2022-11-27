import {
  shapes,
  images,
  colorPalette,
  download,
  cog,
  flask,
  flash,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { IonIconProps } from "typings/ion";

const sideTabsArray = [
  {
    name: "Templates",
    get value() {
      return this.name.toUpperCase();
    },
    icon: (props: IonIconProps) => <IonIcon icon={shapes} {...props}></IonIcon>,
  },
  {
    name: "Backgrounds",
    get value() {
      return this.name.toUpperCase();
    },
    icon: (props: IonIconProps) => <IonIcon icon={images} {...props}></IonIcon>,
  },
  {
    name: "Thoughts",
    get value() {
      return this.name.toUpperCase();
    },
    icon: (props: IonIconProps) => <IonIcon icon={flash} {...props}></IonIcon>,
  },
  {
    name: "Customization",
    get value() {
      return this.name.toUpperCase();
    },
    icon: (props: IonIconProps) => (
      <IonIcon icon={colorPalette} {...props}></IonIcon>
    ),
  },
  {
    name: "Download",
    get value() {
      return this.name.toUpperCase();
    },
    icon: (props: IonIconProps) => (
      <IonIcon icon={download} {...props}></IonIcon>
    ),
  },
  {
    name: "Experiment",
    get value() {
      return this.name.toUpperCase();
    },
    icon: (props: IonIconProps) => <IonIcon icon={flask} {...props}></IonIcon>,
  },
  {
    name: "Settings",
    get value() {
      return this.name.toUpperCase();
    },
    icon: (props: IonIconProps) => <IonIcon icon={cog} {...props}></IonIcon>,
  },
];

export default sideTabsArray;
