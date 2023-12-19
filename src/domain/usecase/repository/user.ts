import { UserEntity } from "../../entity/user";

interface CreateUserUseCaseRepositoryInterface{
    createUser(metadata: UserEntity):Promise<UserEntity>
}

interface GetUserByIDUseCaseRepositoryInterface{
    getUser(userID: number): Promise<UserEntity | null>
}

interface DeleteUserUseCaseRepositoryInterface{
    deleteUser(ID:number): Promise<void>
}

interface updateUserUseCaseRepositoryInterface{
    getUser(userId: number):Promise<UserEntity | null>
    updateUser(user: UserEntity):Promise<UserEntity>
}

export{
    CreateUserUseCaseRepositoryInterface,
    GetUserByIDUseCaseRepositoryInterface,
    DeleteUserUseCaseRepositoryInterface,
    updateUserUseCaseRepositoryInterface
}