//Wrong way
interface AdminInterface {
    login(): void
    create(): void
    delete(): void
    updateUser(): void
}

class SuperAdminUser implements AdminInterface{
    login(): void {
        console.log('SuperAdminUser login')
    }
    create(): void {
        console.log('SuperAdminUser create')
    }
    delete(): void {
        console.log('SuperAdminUser delete')
    }
    updateUser(): void {
        console.log('SuperAdminUser update')
    }
    
}

class CommonUser implements AdminInterface{
    
    login(): void {
        console.log('Common User login')
    }
    create(): void {
        console.log('Common User create')
    }
    delete(): void {
        throw new Error("Method not implemented.")
    }
    updateUser(): void {
        throw new Error("Method not implemented.")
    }
}

//Right way

interface MainUserInterface {
    login(): void
}


interface CreateorRoleInterface extends MainUserInterface {
    create(): void
}

interface AdminInterface extends CreateorRoleInterface {
    delete(): void
    updateUser(): void
}

class SuperAdminUserSegregation implements AdminInterface{
    login(): void {
        console.log('SuperAdminUser login')
    }
    create(): void {
        console.log('SuperAdminUser create')
    }
    delete(): void {
        console.log('SuperAdminUser delete')
    }
    updateUser(): void {
        console.log('SuperAdminUser update')
    }
    
}

class CommonUserSegregation implements CreateorRoleInterface{
    
    login(): void {
        console.log('Common User login')
    }
    create(): void {
        console.log('Common User create')
    }
}

const commonUser = new CommonUserSegregation()
commonUser.login()
commonUser.create()

const superAdminUser = new SuperAdminUserSegregation()
superAdminUser.login()
superAdminUser.create()
superAdminUser.delete()
superAdminUser.updateUser()
