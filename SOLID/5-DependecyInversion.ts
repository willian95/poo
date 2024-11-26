interface UserRepositoryInterface{
    createUser():void
}

class CreateUserUseCase {

    constructor(private userRepository: UserRepositoryInterface) {}

    createUser(): void {
        this.userRepository.createUser();
    }

}

class UserRepository implements UserRepositoryInterface {

    createUser(): void {
        console.log('User has been created');
    }

}

class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase) {}

    createUser(): void {
        this.createUserUseCase.createUser();
    }

}


const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);
createUserController.createUser();
