interface UserRepositoryInterface{
    createUser():void
    deleteUser():void
}

class CreateUserUseCase {

    constructor(private userRepository: UserRepositoryInterface) {}

    createUser(): void {
        this.userRepository.createUser();
    }

}

class DeleteUserUseCase {

    constructor(private userRepository: UserRepositoryInterface) {}

    deleteUser(): void {
        this.userRepository.deleteUser();
    }

}

class UserRepository implements UserRepositoryInterface {

    createUser(): void {
        console.log('User has been created');
    }

    deleteUser(): void {
        console.log('User has been deleted');
    }

}

class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase) {}

    createUser(): void {
        this.createUserUseCase.createUser();
    }

}

class DeleteUserController {

    constructor(private deleteUserUseCase: DeleteUserUseCase) {}

    deleteUser(): void {
        this.deleteUserUseCase.deleteUser();
    }

}

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);
createUserController.createUser();

const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);
deleteUserController.deleteUser();