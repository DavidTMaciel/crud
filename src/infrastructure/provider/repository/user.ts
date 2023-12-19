import { UserEntity } from "../../../domain/entity/user";
import { CreateUserUseCaseRepositoryInterface, DeleteUserUseCaseRepositoryInterface, GetUserByIDUseCaseRepositoryInterface, updateUserUseCaseRepositoryInterface } from "../../../domain/usecase/repository/user";
import { createUser, deleteUser, getUser, updateUser } from "../../internal/database/postgresql/user";


class CreateUserUseCaseRepository implements CreateUserUseCaseRepositoryInterface{
    async createUser(metadata: UserEntity): Promise<UserEntity> {
        return await createUser(metadata)
    }
}

class GetUserUseCaseRepository implements GetUserByIDUseCaseRepositoryInterface{
    async getUser(userId: number):Promise<UserEntity|null>{
        console.log("teste")
        return await getUser(userId)
    }
}

class UpdateUserUseCaseRepository implements updateUserUseCaseRepositoryInterface{
    async getUser(userId: number): Promise<UserEntity | null> {
        return await getUser(userId)
    }
    async updateUser(user: UserEntity): Promise<UserEntity> {
        return await updateUser(user)
    }
}

class DeleteUserUseCaseRepository implements DeleteUserUseCaseRepositoryInterface{
    async deleteUser(ID: number): Promise<void> {
        return await deleteUser(ID)
    }
    
}


export{
    CreateUserUseCaseRepository,
    GetUserUseCaseRepository,
    UpdateUserUseCaseRepository,
    DeleteUserUseCaseRepository
}