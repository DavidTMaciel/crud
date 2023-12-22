import { CarEntity } from "../../../../domain/entity/car";
import { AppDataSource } from "./datasource";
import { CarModel } from "./model/car";
import { toCarEntity, toCarModel } from "./transformer/car";


async function createCar(car: CarEntity): Promise<CarEntity> {
    const model = toCarModel(car)
    const repository = await AppDataSource.manager.save(model)
    return toCarEntity(repository)
}

async function getCarByID(carID: number): Promise<CarEntity | null> {
    const repository = AppDataSource.getRepository(CarModel)
    const car = await repository.findOne({ where: { ID: carID } })
    return car ? toCarEntity(car) : null
}

async function updateCar(car: CarEntity): Promise<CarEntity> {
    const repository = AppDataSource.getRepository(CarModel)
    const model = toCarModel(car)
    const result = await repository.save(model)

    return toCarEntity(result)
}

async function deleteCar(carID: number): Promise<void> {
    const repository = AppDataSource.getRepository(CarModel)
    await repository.delete(carID)
}

export {
    createCar,
    getCarByID,
    updateCar,
    deleteCar
}