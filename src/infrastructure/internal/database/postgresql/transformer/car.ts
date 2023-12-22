import { CarModel } from '../model/car'
import { CarEntity } from '../../../../../domain/entity/car'

function toCarEntity(m: CarModel): CarEntity {
    return new CarEntity(m.ID, m.model, m.year, m.brand, m.color, m.createdAt, m.updatedAt)

}

function toCarModel(e: CarEntity): CarModel{
    return new CarModel(e.ID, e.model,e.year,e.brand,e.color,e.createdAt,e.updatedAt)
}

export{
    toCarEntity,
    toCarModel
}