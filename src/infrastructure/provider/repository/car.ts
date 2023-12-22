import { CarEntity } from "../../../domain/entity/car";
import { CreateCarUseCaseRepositoyInterface, DeleteCarUseCaseRepositoryInterface, GetCarByIDUseCaseRepositoryInterface, UpdateCarUseCaseRepositoryInterface } from "../../../domain/usecase/repository/car";
import { createCar, deleteCar, getCarByID, updateCar } from "../../internal/database/postgresql/car";

class CreateCarUseCaseRepository implements CreateCarUseCaseRepositoyInterface {
    async createCar(metadata: CarEntity): Promise<CarEntity> {
        return await createCar(metadata)
    }
}

class UpdateCarUseCaseRepository implements UpdateCarUseCaseRepositoryInterface {
    async getCarByID(CarID: number): Promise<CarEntity | null> {
        return await getCarByID(CarID)
    }
    async updateCar(metadata: CarEntity): Promise<CarEntity> {
        return await updateCar(metadata)
    }

}

class GetCarByIDUseCaseRepository implements GetCarByIDUseCaseRepositoryInterface {
    async getCarByID(CarID: number): Promise<CarEntity | null> {
        return await getCarByID(CarID)
    }

}

class DeleteCarUseCaseRepository implements DeleteCarUseCaseRepositoryInterface {
    async deleteCar(ID: number): Promise<void> {
        return await deleteCar(ID)
    }

}

export {
    CreateCarUseCaseRepository,
    UpdateCarUseCaseRepository,
    GetCarByIDUseCaseRepository,
    DeleteCarUseCaseRepository
}