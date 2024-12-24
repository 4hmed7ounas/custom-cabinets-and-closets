import { IconType } from "react-icons";

export interface serviceSection {
  url: string;
  label: string;
  icon: IconType;
  imageUrl: string;
}

export interface cardSection {
  heading: string;
  imageUrl: string;
  titles: string[]; // Changed from 'title' to an array of titles
  descriptions: string[]; // Changed from 'description' to an array of descriptions
}

export interface Links {
  name: string;
  route: string;
  icon: IconType;
}

export interface socialLinks {
  label: string;
  url: string;
  icon: IconType;
}

export interface contactInfo {
  label: string;
  url: string;
  value: string;
}

export interface routeTitles {
  [key: string]: string;
}

export type mainPosterData = {
  [key: string]: {
    title: string;
    description: string;
  };
};
