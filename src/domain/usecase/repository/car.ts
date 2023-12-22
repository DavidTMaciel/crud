import { CarEntity } from "../../entity/car";


interface CreateCarUseCaseRepositoyInterface {
    createCar(metadata: CarEntity): Promise<CarEntity>
}

interface GetCarByIDUseCaseRepositoryInterface {
    getCarByID(CarID: number): Promise<CarEntity | null>
}

interface UpdateCarUseCaseRepositoryInterface {
    getCarByID(CarID: number): Promise<CarEntity | null>
    updateCar(metadata: CarEntity): Promise<CarEntity>
}

interface DeleteCarUseCaseRepositoryInterface {
    deleteCar(ID: number): Promise<void>
}

export {
    CreateCarUseCaseRepositoyInterface,
    GetCarByIDUseCaseRepositoryInterface,
    UpdateCarUseCaseRepositoryInterface,
    DeleteCarUseCaseRepositoryInterface
}