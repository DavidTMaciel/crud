import { UserEntity } from "../entity/user";
import { CreateUserUseCaseRepositoryInterface, DeleteUserUseCaseRepositoryInterface, GetUserByIDUseCaseRepositoryInterface, updateUserUseCaseRepositoryInterface } from "./repository/user";
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, GetUserByIDUseCaseResponse, GetUserByIDUseCaseRequest, UpdateUserUseCaseRequest, UpdateUserUseCaseResponse, DeleteUserUseCaseRequest, DeleteUserUseCaseResponse } from "./ucio/user";
import { CreateUserUseCaseValidateInterface, DeleteUserUseCaseValidateInterface, GetUserByIDUseCaseValidateInterface, UpdateUserUseCaseValidateInterface } from "./validate/user";
import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from '../entity/error';


class CreateUserUseCase {
    public validate: CreateUserUseCaseValidateInterface
    public repository: CreateUserUseCaseRepositoryInterface

    constructor(validate: CreateUserUseCaseValidateInterface, repository: CreateUserUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        try {
            const messageError = await this.validate.createUser(req)

            if (!messageError) {

                const now = new Date()

                const user = new UserEntity(null, req.name, req.email, req.password, now, now)

                const data = await this.repository.createUser(user)

                return new CreateUserUseCaseResponse(data, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new CreateUserUseCaseResponse(null, new PreconditionError(messageError))
            }

        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateUserUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class GetUserUseCase {
    public validate: GetUserByIDUseCaseValidateInterface
    public repository: GetUserByIDUseCaseRepositoryInterface

    constructor(validate: GetUserByIDUseCaseValidateInterface, repository: GetUserByIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async getUser(req: GetUserByIDUseCaseRequest): Promise<GetUserByIDUseCaseResponse> {
        try {
            const messageError: any = await this.validate.getUser(req)

            if (!messageError) {
                console.log("teste useCase")
                const data = await this.repository.getUser(req.ID)

                return new GetUserByIDUseCaseResponse(data, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new GetUserByIDUseCaseResponse(null, new PreconditionError(messageError))
            }

        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new GetUserByIDUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class UpdateUserUseCase{
    public validate: UpdateUserUseCaseValidateInterface
    public repository: updateUserUseCaseRepositoryInterface

    constructor(validate:UpdateUserUseCaseValidateInterface , repository:updateUserUseCaseRepositoryInterface){
        this.validate = validate
        this.repository = repository
    }

    async updateUser(req: UpdateUserUseCaseRequest):Promise<UpdateUserUseCaseResponse>{
        try{
            const messageError:any = await this.validate.updateUser(req)

            if(!messageError){
                let user = await this.repository.getUser(req.id)
                let data  = null
                if(user){
                    const now = new Date()
                    user.name= req.name
                    user.email = req.email
                    user.password = req.password
                    user.updatedAt = now
                    data = await this.repository.updateUser(user)
                }
                return new UpdateUserUseCaseResponse(data, null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new UpdateUserUseCaseResponse(null, new PreconditionError(messageError))
            }
            
        }catch(error:any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new UpdateUserUseCaseResponse(null, new InternalServerError(error.message))  
        }
    }
}

class DeleteUserUseCase{
    public validate: DeleteUserUseCaseValidateInterface
    public repository: DeleteUserUseCaseRepositoryInterface

    constructor(validate:DeleteUserUseCaseValidateInterface , repository:DeleteUserUseCaseRepositoryInterface){
        this.validate = validate
        this.repository = repository
    }

    async DeleteUser(req: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse>{
        try{
            const messageError:any = await this.validate.deleteUser(req)
            
            if(!messageError){
                await this.repository.deleteUser(req.ID)
                return new DeleteUserUseCaseResponse(null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new DeleteUserUseCaseResponse(new PreconditionError(messageError))
            }
        }catch(error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new UpdateUserUseCaseResponse(null, new InternalServerError(error.message))  
        }
    }
}

export{
    CreateUserUseCase,
    GetUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase
}