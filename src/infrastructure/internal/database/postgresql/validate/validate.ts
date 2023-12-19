import { AppDataSource } from "../datasource"
import { UserModel } from "../model/user"

async function checkEmailExists(email: string): Promise<boolean> {
    const repository = AppDataSource.getRepository(UserModel)
    const user = await repository.findOne(({ where: { email } }))
    return !!user
}

export{
    checkEmailExists
}