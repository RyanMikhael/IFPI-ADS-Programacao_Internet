import { User } from "../entities/User";

export interface usersRepository{
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;

}