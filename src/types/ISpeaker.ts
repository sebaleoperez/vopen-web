import { ISocialLink } from "./ISocialInfo";

export interface ISpeaker {
  id: string;
  name: string;
  imageUrl: string;
  smallDescription: string;
  longDescription: string;
  country: string;
  socialLinks: ISocialLink[];
}
