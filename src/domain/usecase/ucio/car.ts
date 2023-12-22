import { CarEntity } from "../../entity/car"
import { ErrorEntity } from "../../entity/error"


class CreateCarUseCaseRequest {
    public model: string
    public year: number
    public brand: string
    public color: string

    constructor(model: string, year: number, brand: string, color: string) {
        this.model = model
        this.year = year
        this.brand = brand
        this.color = color
    }

}

class CreateCarUseCaseResponse {
    public car: CarEntity | null
    public error: ErrorEntity | null

    constructor(car: CarEntity | null, error: ErrorEntity | null) {
        this.car = car
        this.error = error
    }
}

class UpdateCarUseCaseRequest {
    public ID: number
    public model: string
    public year: number
    public brand: string
    public color: string

    constructor(ID: number, model: string, year: number, brand: string, color: string) {
        this.ID = ID
        this.model = model
        this.year = year
        this.brand = brand
        this.color = color
    }
}

class UpdateCarUseCaseResponse {
    public car: CarEntity | null
    public error: ErrorEntity | null

    constructor(car: CarEntity | null, error: ErrorEntity | null) {
        this.car = car
        this.error = error
    }
}

class GetCarByIDUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class GetCarByIDUseCaseResponse {
    public car: CarEntity | null
    public error: ErrorEntity | null

    constructor(car: CarEntity | null, error: ErrorEntity | null) {
        this.car = car
        this.error = error
    }
}

class DeleteCarUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class DeleteCarUseCaseResponse {
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null) {
        this.error = error
    }
}

export {
    CreateCarUseCaseRequest,
    CreateCarUseCaseResponse,
    UpdateCarUseCaseRequest,
    UpdateCarUseCaseResponse,
    GetCarByIDUseCaseRequest,
    GetCarByIDUseCaseResponse,
    DeleteCarUseCaseRequest,
    DeleteCarUseCaseResponse
}