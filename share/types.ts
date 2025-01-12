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
  titles: string[];
  descriptions: string[];
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
    imageUrl: string;
  };
};

export interface reviewsData {
  title: string;
  description: string;
  reviewer: string;
  rating: number;
}

export interface servicesHome {
  title: string;
  description: string;
}
