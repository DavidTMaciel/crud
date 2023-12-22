import { Router } from "express";
import { CreateCarController, DeleteCarController, GetCarByIDController, UpdateCarController } from "../controller/car";


class CarRouter{
    public router :Router

    constructor(){
        this.router = Router()
        this.router.post('/createCar', new CreateCarController().createCar)
        this.router.post('/updateCar', new UpdateCarController().updateCar)
        this.router.post('/getCarByID', new GetCarByIDController().getCarByID)
        this.router.post('/deleteCar', new DeleteCarController().deleteCar)
    }

    getRouter(): Router {
        return this.router
      }
}

export {CarRouter}