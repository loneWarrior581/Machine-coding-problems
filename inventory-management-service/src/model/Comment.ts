import { getRandomId } from "../utils/generateRandomId";

export class Comment {
  private commentId: string;
  private text: string;

  constructor(commentText: string) {
    this.commentId = getRandomId();
    this.text = commentText;
  }

  public getCommentId(): string {
    return this.commentId;
  }

  public getComment(): string {
    return this.text;
  }
}
