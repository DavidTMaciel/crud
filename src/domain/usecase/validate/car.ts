import { CreateCarUseCaseRequest, DeleteCarUseCaseRequest, GetCarByIDUseCaseRequest, UpdateCarUseCaseRequest } from "../ucio/car";


interface CreateCarUseCaseValidateInterface {
    createCar(req: CreateCarUseCaseRequest): Promise<string | null>
}

interface UpdateCarUseCaseValidateInterface {
    updateCar(req: UpdateCarUseCaseRequest): Promise<string | null>
}

interface GetCarByIDUseCaseValidateInterface {
    getCarByID(req: GetCarByIDUseCaseRequest): Promise<string | null>
}

interface DeleteCarUseCaseValidateInterface {
    deleteCar(req: DeleteCarUseCaseRequest): Promise<string | null>
}

export {
    CreateCarUseCaseValidateInterface,
    UpdateCarUseCaseValidateInterface,
    GetCarByIDUseCaseValidateInterface,
    DeleteCarUseCaseValidateInterface
}