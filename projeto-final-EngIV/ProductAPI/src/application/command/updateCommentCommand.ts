import { Comment } from "../../domain/entities/comment";

interface  updateCommentRequestModel{
     productId: string;
     text: string;
     postDate: Date;
     userId: string;
     userName: string;
}