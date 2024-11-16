
//Wrong way
interface AdminInterface{
    login():void
    createUser():void
    deleteUser():void
    updateUser():void
}

class SuperAdminUser implements AdminInterface{
    login(): void {
        console.log('User has been logged in');
    }
    createUser(): void {
        console.log('User has been created');
    }
    deleteUser(): void {
        console.log('User has been deleted');
    }
    updateUser(): void {
        console.log('User has been updated');
    }
}

class OrdinaryUser implements AdminInterface{

    login(): void {
        console.log('User has been logged in');
    }

    createUser(): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(): void {
        throw new Error("Method not implemented.");
    }
    updateUser(): void {
        throw new Error("Method not implemented.");
    }
}

//Right Way
interface MainUserInterface{
    login():void
}

interface ValidatorUserSegregation extends MainUserInterface{
    createUser():void
}

interface AdminInterfaceSegregation extends MainUserInterface{
    createUser():void
    deleteUser():void
    updateUser():void
}

class SegregationSuperAdmin implements AdminInterfaceSegregation{
    login(): void {
        console.log('User has been logged in');
    }
    createUser(): void {
        console.log('User has been created');
    }
    deleteUser(): void {
        console.log('User has been deleted');
    }
    updateUser(): void {
        console.log('User has been updated');
    }
}

class ValidatorUser implements ValidatorUserSegregation {
    login(): void {
        console.log('User has been logged in');
    }
    createUser(): void {
        console.log('User has been created');
    }
}

class segregationOrdindaryUser implements MainUserInterface{
    login(): void {
        console.log('User has been logged in');
    }
}