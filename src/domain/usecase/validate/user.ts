import { CreateUserUseCaseRequest, GetUserByIDUseCaseRequest, UpdateUserUseCaseRequest, DeleteUserUseCaseRequest } from "../ucio/user";

interface CreateUserUseCaseValidateInterface {
    createUser(req: CreateUserUseCaseRequest): Promise<string | null>
}

interface GetUserByIDUseCaseValidateInterface {
    getUser(req: GetUserByIDUseCaseRequest): Promise<string | null>
}

interface UpdateUserUseCaseValidateInterface {
    updateUser(req: UpdateUserUseCaseRequest): Promise<string | null>
}

interface DeleteUserUseCaseValidateInterface {
    deleteUser(req: DeleteUserUseCaseRequest): Promise<string | null>
}

export{
    CreateUserUseCaseValidateInterface,
    GetUserByIDUseCaseValidateInterface,
    UpdateUserUseCaseValidateInterface,
    DeleteUserUseCaseValidateInterface
}