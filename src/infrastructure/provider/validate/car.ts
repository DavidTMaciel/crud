import { CreateCarUseCaseRequest, DeleteCarUseCaseRequest, GetCarByIDUseCaseRequest, UpdateCarUseCaseRequest } from "../../../domain/usecase/ucio/car";
import { CreateCarUseCaseValidateInterface, DeleteCarUseCaseValidateInterface, GetCarByIDUseCaseValidateInterface, UpdateCarUseCaseValidateInterface } from "../../../domain/usecase/validate/car";
import { checkNumberEmpty, checkStringEmpty } from "./validate";


class CreateCarUseCaseValidate implements CreateCarUseCaseValidateInterface {
    async createCar(req: CreateCarUseCaseRequest): Promise<string | null> {

        if (checkStringEmpty(req.model)) return "O Modelo não pode ser vazio"

        if (checkNumberEmpty(req.year)) return "O Ano não pode ser vazio"

        if (checkStringEmpty(req.brand)) return "A Marca não pode ser vazia"

        if (checkStringEmpty(req.color)) return "A cor não pode ser vazia"

        return null;
    }

}

class UpdateCarUseCaseValidate implements UpdateCarUseCaseValidateInterface {
    async updateCar(req: UpdateCarUseCaseRequest): Promise<string | null> {


        if (checkStringEmpty(req.model)) return "O Modelo não pode ser vazio"

        if (checkNumberEmpty(req.year)) return "O Ano não pode ser vazio"

        if (checkStringEmpty(req.brand)) return "A Marca não pode ser vazia"

        if (checkStringEmpty(req.color)) return "A cor não pode ser vazia"

        return null;
    }

}

class GetCarByIDUseCaseValidate implements GetCarByIDUseCaseValidateInterface {
    async getCarByID(req: GetCarByIDUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.ID)) return 'O identificador não pode ser vazio'
        return null;
    }

}

class DeleteCarUseCaseValidate implements DeleteCarUseCaseValidateInterface {
    async deleteCar(req: DeleteCarUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.ID)) return 'O identificador não pode ser vazio'
        return null;
    }

}

export {
    CreateCarUseCaseValidate,
    UpdateCarUseCaseValidate,
    GetCarByIDUseCaseValidate,
    DeleteCarUseCaseValidate
}