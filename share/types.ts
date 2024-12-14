import { IconType } from "react-icons";

export interface cardSection {
  heading: string
  imageUrl: string;
  title: string;
  description: string;
}

export interface navLinks {
  name: string;
  route: string;
  icon: IconType;
}

export interface socialLinks {
  label: string;
  url: string;
  icon: IconType;
}

export interface contactInfo{
  label: string;
  url: string;
  value: string;
}