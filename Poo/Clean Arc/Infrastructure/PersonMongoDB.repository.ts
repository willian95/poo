import { PersonRepositoryInterface } from "../Domain/Person.repository";

export class PersonRepositoryMongoDB implements PersonRepositoryInterface{
    changeName(name: string): boolean {

        console.log(name)

        return true
    }

}