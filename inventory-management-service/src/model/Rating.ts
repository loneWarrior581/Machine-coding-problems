import { Comment } from "./Comment";

export class Rating {
  private listOfComments: Comment[];
  private listOfRating: Number[];
  private totalRating;

  constructor() {
    this.listOfComments = [];
    this.listOfRating = [];
    this.totalRating = 0;
  }

  public getAvarageRating(): number {
    return this.totalRating / this.listOfRating.length;
  }

  public addRatingAndComment(commentText: string, ratingScore: number): void {
    const comment = new Comment(commentText);
    this.listOfComments.push(comment);
    this.listOfRating.push(ratingScore);
    this.totalRating += ratingScore;
  }
}
blob:file:///84d0c7a6-53cf-4c51-83f3-2250bde80744