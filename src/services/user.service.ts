import { NotFoundError } from '../errors/not-found.error';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class UserService {

    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    async getAll(): Promise<User[]> {
        return await this.userRepository.getAll();
        
    }    

    async getById(id: string): Promise<User> { 
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new NotFoundError("Usuário não encontrado");
        }       
        return user;
    }

    async save(use: User): Promise<void> {
        await this.userRepository.save(use);
    }

    async updadte(id: string, user: User) {
        const _user = await this.userRepository.getById(id); 
        if (!_user) {
            throw new NotFoundError("Usuário não encontrado");
        }
        _user.nome = user.nome;
        _user.email = user.email;
        
        this.userRepository.update(_user);       
        
    }

    async delete(id: string) {
        await this.userRepository.delete(id);
    }       
    
     
}