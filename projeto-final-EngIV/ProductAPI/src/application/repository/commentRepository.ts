import { Comment } from "../../domain/entities/comment";

export interface CommentRepository{
    all(productId: string): Promise<Comment>;
    create(obj:Comment): Promise<String>;
    change(obj: Comment, id: string): Promise<Object>;
    get(id: string): Promise<Comment>;
    
}