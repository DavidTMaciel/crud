import { CarEntity } from "../entity/car";
import { TAG_PRE_CONDITION_ERROR, PreconditionError, InternalServerError, TAG_INTERNAL_SERVER_ERROR } from "../entity/error";
import { CreateCarUseCaseRepositoyInterface, DeleteCarUseCaseRepositoryInterface, GetCarByIDUseCaseRepositoryInterface, UpdateCarUseCaseRepositoryInterface } from "./repository/car";
import { CreateCarUseCaseRequest, CreateCarUseCaseResponse, DeleteCarUseCaseRequest, DeleteCarUseCaseResponse, GetCarByIDUseCaseRequest, GetCarByIDUseCaseResponse, UpdateCarUseCaseRequest, UpdateCarUseCaseResponse } from "./ucio/car";
import { CreateCarUseCaseValidateInterface, DeleteCarUseCaseValidateInterface, GetCarByIDUseCaseValidateInterface, UpdateCarUseCaseValidateInterface } from "./validate/car";


class CreateCarUseCase {

    public validate: CreateCarUseCaseValidateInterface
    public repository: CreateCarUseCaseRepositoyInterface

    constructor(validate: CreateCarUseCaseValidateInterface, repository: CreateCarUseCaseRepositoyInterface) {
        this.validate = validate
        this.repository = repository
    }

    async createCar(req: CreateCarUseCaseRequest): Promise<CreateCarUseCaseResponse> {
        try {
            const messageError = await this.validate.createCar(req)

            if (!messageError) {
                const now = new Date()

                const car = new CarEntity(null, req.model, req.year, req.brand, req.color, now, now)

                const data = await this.repository.createCar(car)

                return new CreateCarUseCaseResponse(data, null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new CreateCarUseCaseResponse(null, new PreconditionError(messageError))
            }
        }
        catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateCarUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class GetCarByIDUseCase {
    public validate: GetCarByIDUseCaseValidateInterface
    public repository: GetCarByIDUseCaseRepositoryInterface

    constructor(validate: GetCarByIDUseCaseValidateInterface, repository: GetCarByIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async getCarByID(req: GetCarByIDUseCaseRequest): Promise<GetCarByIDUseCaseResponse> {
        try {
            const messageError = await this.validate.getCarByID(req)

            if (!messageError) {
                const data = await this.repository.getCarByID(req.ID)

                return new GetCarByIDUseCaseResponse(data, null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new GetCarByIDUseCaseResponse(null, new PreconditionError(messageError))
            }
        }
        catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new GetCarByIDUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class UpdateCarUseCase {
    public validate: UpdateCarUseCaseValidateInterface
    public repository: UpdateCarUseCaseRepositoryInterface

    constructor(validate: UpdateCarUseCaseValidateInterface, repository: UpdateCarUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async updateCar(req: UpdateCarUseCaseRequest): Promise<UpdateCarUseCaseResponse> {
        try {
            const messageError = await this.validate.updateCar(req)

            if (!messageError) {
                let car = await this.repository.getCarByID(req.ID)
                let data = null
                if (car) {
                    const now = new Date()
                    car.model = req.model
                    car.year = req.year
                    car.brand = req.brand
                    car.color = req.color
                    car.updatedAt = now

                    data = await this.repository.updateCar(car)
                }
                return new UpdateCarUseCaseResponse(data, null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new UpdateCarUseCaseResponse(null, new PreconditionError(messageError))
            }
        }
        catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new UpdateCarUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class DeleteCarUseCase {
    public validate: DeleteCarUseCaseValidateInterface
    public repository: DeleteCarUseCaseRepositoryInterface

    constructor(validate: DeleteCarUseCaseValidateInterface, repository:DeleteCarUseCaseRepositoryInterface ){
        this.validate=validate
        this.repository=repository
    }

    async deleteCar(req: DeleteCarUseCaseRequest):Promise<DeleteCarUseCaseResponse>{
        try{
            const messageError = await this.validate.deleteCar(req)
            if(!messageError){
                await this.repository.deleteCar(req.ID)
                return new DeleteCarUseCaseResponse(null)
            }
            else{
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new DeleteCarUseCaseResponse(new PreconditionError(messageError))            
            }
        }
        catch(error:any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new DeleteCarUseCaseResponse(new InternalServerError(error.message))
        }
    }
}

export{
    CreateCarUseCase,
    UpdateCarUseCase,
    DeleteCarUseCase,
    GetCarByIDUseCase
}