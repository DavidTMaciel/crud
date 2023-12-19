import { Request, Response } from "express";
import { CreateUserUseCaseRequest, DeleteUserUseCaseRequest, GetUserByIDUseCaseRequest, UpdateUserUseCaseRequest } from "../../domain/usecase/ucio/user";
import { CreateUserUseCaseValitade, DeleteUserUseCaseValidate, GetUserUseCaseValidate, UpdateUserUseCaseValidate } from "../../infrastructure/provider/validate/user";
import { CreateUserUseCaseRepository, DeleteUserUseCaseRepository, GetUserUseCaseRepository, UpdateUserUseCaseRepository } from "../../infrastructure/provider/repository/user";
import { CreateUserUseCase, DeleteUserUseCase, GetUserUseCase, UpdateUserUseCase } from "../../domain/usecase/user";
import { SuccessResponse } from "../response/response";

class CreateUserController{
    async createUser(req: Request, res: Response): Promise<void>{
        const {name, email, password} = req.body

        const ucReq = new CreateUserUseCaseRequest(name, email, password)
        const validate = new CreateUserUseCaseValitade()
        const repository = new CreateUserUseCaseRepository()
        const usecase = new CreateUserUseCase(validate, repository)

        const ucRes = await usecase.createUser(ucReq)

        new SuccessResponse().success(res,ucRes)
    }
}

class UpdateUserController{
    async updateUser(req: Request, res: Response): Promise<void>{
        const {ID, name, email, password} = req.body

        const ucReq = new UpdateUserUseCaseRequest(ID, name, email, password)
        const validate = new UpdateUserUseCaseValidate()
        const repository = new UpdateUserUseCaseRepository()
        const usecase = new UpdateUserUseCase(validate,repository)

        const ucRes = await usecase.updateUser(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class GetUserController{
    async getUser(req: Request, res: Response): Promise<void>{
        const {ID} = req.body

        const ucReq = new GetUserByIDUseCaseRequest(ID)
        const validate = new GetUserUseCaseValidate()
        const repository = new GetUserUseCaseRepository()
        const usecase = new GetUserUseCase(validate, repository)

        const ucRes = await usecase.getUser(ucReq)

        new SuccessResponse().success(res, ucRes)

    }
}

class DeleteUserController{
    async deleteUser(req: Request, res: Response): Promise<void>{
        const {ID} = req.body

        const ucReq = new DeleteUserUseCaseRequest(ID)
        const validate = new DeleteUserUseCaseValidate()
        const repository = new DeleteUserUseCaseRepository()
        const usecase = new DeleteUserUseCase(validate, repository)

        const ucRes = await usecase.DeleteUser(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {
    CreateUserController,
    UpdateUserController,
    GetUserController,
    DeleteUserController
}