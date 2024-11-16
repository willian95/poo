class CreatePersonController{

    createPerson(createPersonUseCase: CreatePersonUseCase){
        createPersonUseCase.createPerson();
    }

}