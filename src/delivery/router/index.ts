import express from 'express'
import { UserRouter } from './user'
import { CarRouter } from './car'

class Router{

    constructor(app: express.Router){
        app.use(new UserRouter().getRouter())
        app.use(new CarRouter().getRouter())
    }
}

export {Router}