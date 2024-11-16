import { ChangeNameUseCase } from "../Application/ChangeName.usecase";
import { ChangeNameController } from "./ChangeName.controller";
import { PersonRepositoryMongoDB } from "./PersonMongoDB.repository";
import { PersonRepositoryMysql } from "./PersonMysql.repository";

//const personMysqlRepository = new PersonRepositoryMysql
const personMongoDBRepository = new PersonRepositoryMongoDB
const changeNameUseCase = new ChangeNameUseCase(personMongoDBRepository)
export const changeNameController = new ChangeNameController(changeNameUseCase)