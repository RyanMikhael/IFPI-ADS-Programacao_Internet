import { usersRepository } from "../../repositories/usersRepository";
import { createUserRequestDTO } from "./createUserDTO";
import { User } from "../../entities/User";

export class createUser{
    constructor(
        private usersRepository: usersRepository

    ){}
    async execute(data: createUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if( userAlreadyExists){
            throw new Error('User already exists.')
        }

        const user = new User(data)

        await this.usersRepository.save(user)
        
    }
}