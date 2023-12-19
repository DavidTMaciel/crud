import { UserEntity } from "../../../../domain/entity/user";
import { AppDataSource } from "./datasource";
import { UserModel } from "./model/user";
import { toUserEntity, toUserModel } from "./transformer/user";


async function createUser(user: UserEntity): Promise<UserEntity> {
    const model = toUserModel(user)
    const repository = await AppDataSource.manager.save(model)
    return toUserEntity(repository)
}

async function getUser(userID: number): Promise<UserEntity | null> {
    console.log("teste")
    const repository = AppDataSource.getRepository(UserModel)
    console.log(repository)
    const user = await repository.findOne({ where: { ID: userID } })
    console.log(user)
    return user ? toUserEntity(user) : null
}

async function deleteUser(userID:number):Promise<void> {
    const repository = AppDataSource.getRepository(UserModel)
    await repository.delete(userID)
}

async function updateUser(user:UserEntity):Promise<UserEntity>{
    const repository = AppDataSource.getRepository(UserModel) 
    const model = toUserModel(user)
    const result = await repository.save(model)

    return toUserEntity(result)
}

export{
    createUser,
    getUser,
    deleteUser,
    updateUser
}