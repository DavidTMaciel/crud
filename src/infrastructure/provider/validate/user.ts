import { checkNumberEmpty, checkStringEmpty} from "./validate";
import { CreateUserUseCaseRequest, DeleteUserUseCaseRequest, GetUserByIDUseCaseRequest, UpdateUserUseCaseRequest } from "../../../domain/usecase/ucio/user";
import { CreateUserUseCaseValidateInterface, DeleteUserUseCaseValidateInterface, GetUserByIDUseCaseValidateInterface, UpdateUserUseCaseValidateInterface } from "../../../domain/usecase/validate/user";
import { checkEmailExists } from "../../internal/database/postgresql/validate/validate";


class CreateUserUseCaseValitade implements CreateUserUseCaseValidateInterface{
   async createUser(req: CreateUserUseCaseRequest): Promise<string | null> {
       
        if(checkStringEmpty(req.name)) return "O nome não pode ser vazio"

        if(checkStringEmpty(req.email)) return "O email não pode ser vazio"

        if(checkStringEmpty(req.password)) return "A senha não pode ser vazia"

        if(await checkEmailExists(req.email)) return "Email já registrado"

        return null
    }

}

class GetUserUseCaseValidate implements GetUserByIDUseCaseValidateInterface{
    async getUser(req: GetUserByIDUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.ID)) return 'O identificador não pode ser vazio.'

        return null
    }

}

class UpdateUserUseCaseValidate implements UpdateUserUseCaseValidateInterface{
    async updateUser(req: UpdateUserUseCaseRequest): Promise<string | null> {

        if(checkStringEmpty(req.name)) return "O nome não pode ser vazio"

        if(checkStringEmpty(req.email)) return "O email não pode ser vazio"

        if(checkStringEmpty(req.password)) return "A senha não pode ser vazia"
        
        return null
    }
    
}

class DeleteUserUseCaseValidate implements DeleteUserUseCaseValidateInterface{
    async deleteUser(req: DeleteUserUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.ID)) return 'O identificador não pode ser vazio' 
        
        return null
    }
    
}

export{
    CreateUserUseCaseValitade,
    GetUserUseCaseValidate,
    UpdateUserUseCaseValidate,
    DeleteUserUseCaseValidate
}