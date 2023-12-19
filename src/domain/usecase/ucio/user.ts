import { ErrorEntity } from "../../entity/error";
import { UserEntity } from "../../entity/user";

class CreateUserUseCaseRequest {
    public name: string
    public email: string
    public password: string

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class CreateUserUseCaseResponse {
    public user: UserEntity | null
    public error: ErrorEntity | null

    constructor(user: UserEntity | null, error: ErrorEntity | null) {
        this.user = user;
        this.error = error;
    }
}

class GetUserByIDUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID;
    }
}

class GetUserByIDUseCaseResponse {
    public user: UserEntity | null
    public error: ErrorEntity | null

    constructor(user: UserEntity | null, error: ErrorEntity | null) {
        this.user = user;
        this.error = error;
    }
}

class DeleteUserUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class DeleteUserUseCaseResponse {
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null) {
        this.error = error
    }
}
class UpdateUserUseCaseRequest{
    public id: number
    public name: string
    public email: string
    public password: string

    constructor(id: number,name: string, email: string, password: string) {
        this.id= id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
class UpdateUserUseCaseResponse{
    public user: UserEntity | null
    public error: ErrorEntity | null

    constructor(user: UserEntity | null, error: ErrorEntity | null) {
        this.user = user;
        this.error = error;
    }
}

export{
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse,
    GetUserByIDUseCaseRequest,
    GetUserByIDUseCaseResponse,
    DeleteUserUseCaseRequest,
    DeleteUserUseCaseResponse,
    UpdateUserUseCaseRequest,
    UpdateUserUseCaseResponse
}