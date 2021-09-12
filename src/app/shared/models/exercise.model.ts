import { Media } from './media.model';
import { Progression } from './progression.model';

export class Exercise {
  name: string;
  reviewDate: string;
  description: string;
  progressions: Progression[];
  medias: Media[];

  constructor(
    name: string,
    reviewDate: string,
    description: string,
    progressions: Progression[],
    medias: Media[]
  ) {
    this.name = name;
    this.reviewDate = reviewDate;
    this.description = description;
    this.progressions = progressions;
    this.medias = medias;
  }
}
