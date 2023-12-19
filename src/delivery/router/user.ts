import { Router } from "express"    
import { CreateUserController, DeleteUserController, GetUserController, UpdateUserController } from "../controller/user"

class UserRouter{
    private router : Router

    constructor(){
        this.router = Router()
        this.router.post('/createUser', new CreateUserController().createUser)
        this.router.post('/getUserByID', new GetUserController().getUser)
        this.router.post('/updateUser', new UpdateUserController().updateUser)
        this.router.post('/deleteUser', new DeleteUserController().deleteUser)
    }

    getRouter(): Router {
        return this.router
      }
}

export{
    UserRouter
}
