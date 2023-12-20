import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserModel } from "./model/user"


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "3003",
    database: "api",
    entities: [UserModel],
    synchronize: true,
    logging: false,
})

export { AppDataSource }