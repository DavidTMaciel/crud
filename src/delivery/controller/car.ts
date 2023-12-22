import { Request, Response } from "express";
import { CreateCarUseCaseRequest, DeleteCarUseCaseRequest, GetCarByIDUseCaseRequest, UpdateCarUseCaseRequest } from "../../domain/usecase/ucio/car";
import { CreateCarUseCaseValidate, DeleteCarUseCaseValidate, GetCarByIDUseCaseValidate, UpdateCarUseCaseValidate } from "../../infrastructure/provider/validate/car";
import { CreateCarUseCaseRepository, DeleteCarUseCaseRepository, GetCarByIDUseCaseRepository, UpdateCarUseCaseRepository } from "../../infrastructure/provider/repository/car";
import { CreateCarUseCase, DeleteCarUseCase, GetCarByIDUseCase, UpdateCarUseCase } from "../../domain/usecase/car";
import { SuccessResponse } from "../response/response";

class CreateCarController{
    async createCar(req: Request, res: Response):Promise<void>{
        const {model, year, brand, color} = req.body

        const ucReq = new CreateCarUseCaseRequest(model, year, brand, color)
        const validate = new CreateCarUseCaseValidate()
        const repository = new CreateCarUseCaseRepository()
        const usecase = new CreateCarUseCase(validate, repository)

        const ucRes = await usecase.createCar(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class UpdateCarController{
    async updateCar(req: Request, res:Response): Promise<void>{
        const {ID, model, year, brand, color} = req.body

        const ucReq = new UpdateCarUseCaseRequest(ID, model, year, brand, color)
        const validate = new UpdateCarUseCaseValidate()
        const repository = new UpdateCarUseCaseRepository()
        const usecase = new UpdateCarUseCase(validate, repository)

        const ucRes = await usecase.updateCar(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class GetCarByIDController{
    async getCarByID(req: Request, res:Response): Promise<void>{
        const {ID} = req.body

        const ucReq = new GetCarByIDUseCaseRequest(ID)
        const validate = new GetCarByIDUseCaseValidate()
        const repository = new GetCarByIDUseCaseRepository()
        const usecase = new GetCarByIDUseCase(validate, repository)

        const ucRes = await usecase.getCarByID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class DeleteCarController{
    async deleteCar(req: Request, res:Response): Promise<void>{
        const {ID} = req.body

        const ucReq = new DeleteCarUseCaseRequest(ID)
        const validate = new DeleteCarUseCaseValidate()
        const repository = new DeleteCarUseCaseRepository()
        const usecase = new DeleteCarUseCase(validate, repository)

        const ucRes = await usecase.deleteCar(ucReq)

        new SuccessResponse().success(res,ucRes)
    }
}

export{
    CreateCarController,
    UpdateCarController,
    GetCarByIDController,
    DeleteCarController
}