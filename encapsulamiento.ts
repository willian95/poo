class Teacher{

    //declarar primero publicas y luego privadas
    private name: string = ""
    private lastname: string = ""
    private email: string = ""
    private signature: string = ""

    constructor(){}

    getName() : string {
        return this.name
    }

    //primero retornar string y luego retornar la clase
    setName(name: string) : Teacher {
        this.name = name
        return this
    }

    getLastname() : string {
        return this.lastname
    }

    setLastname(lastname: string) : Teacher {
        this.lastname = lastname
        return this
    }

    getEmail() : string {
        return this.email
    }

    setEmail(email: string) : Teacher {
        this.email = email
        return this
    }

    getSignature() : string {
        return this.email
    }

    setSignature(signature: string) : Teacher {
        this.signature = signature
        return this
    }

}

const spanishTeacher = new Teacher()
// spanishTeacher.setName("Wilmer")
// spanishTeacher.setLastname("Morales")
// spanishTeacher.setEmail("wilmer95@gmail.com")
// spanishTeacher.setSignature("spanish")

//resaltar error
spanishTeacher.setName("Wilmer 2").setLastname("Morales 2").setEmail("wilmer95@gmail.com 2").setSignature("spanish 2")

console.log(spanishTeacher)