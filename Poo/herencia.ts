class SystemUser {
    public name: string // debe ser publica para que los hijos puedan acceder a este atributo
    public lastname: string
    public email: string

    constructor(name: string, lastname: string, email:string){
        this.name = name
        this.lastname = lastname
        this.email = email
    }

    public login(){
        console.log(`${this.name} ${this.lastname} `+"Do login")
    }

    public readTable(){
        console.log(`${this.name} ${this.lastname} `+"Read table")
    }
}

class AdminUser extends SystemUser{

    public createTable(){
        console.log(`${this.name} ${this.lastname} `+"Create table")
    }

    public updateTable(){
        console.log(`${this.name} ${this.lastname} `+"Update table")
    }
    
    public deleteTable(){
        console.log(`${this.name} ${this.lastname} `+"Delete table")
    }

}

class CommonUser extends SystemUser{

    public writeTable(){
        console.log(`${this.name} ${this.lastname} `+"Write table")
    }

}

const adminUser = new AdminUser("Admin", "User", "admin@gmail.com")
adminUser.login()
adminUser.createTable()
adminUser.readTable()
adminUser.updateTable()
adminUser.deleteTable()

const commonUser = new CommonUser("Common", "User", "commonuser@gmail.com")
commonUser.login()
commonUser.readTable()
commonUser.writeTable()