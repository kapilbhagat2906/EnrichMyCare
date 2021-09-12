export enum MediaType {
  Image,
  Video,
}
export class Media {
  type: MediaType;
  url: string;

  constructor(type: MediaType, url: string) {
    this.type = type;
    this.url = url;
  }
}
