import { PersonRepositoryInterface } from "../Domain/Person.repository";

export class ChangeNameUseCase{

    constructor(private readonly personRepository: PersonRepositoryInterface){}

    changeName(name: string){

        this.personRepository.changeName(name)

    }

}