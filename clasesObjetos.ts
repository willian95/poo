class User{

    // Atributos
    name: string
    lastname: string
    dni: number

    // Constructor
    constructor(name: string, lastname: string, dni: number){
        this.name = name
        this.lastname = lastname
        this.dni = dni
    }

    // Métodos
    getFullName(): string{
        return `${this.name} ${this.lastname}`
    }

    getReverseDNI(): string{
        return this.dni.toString().split('').reverse().join('')
    }

}

const userJose = new User('José', 'Pérez', 4585215)
console.log(userJose)
console.log(userJose.getFullName())
console.log(userJose.getReverseDNI())

const userMaria = new User('María', 'Gómez', 8965412)
console.log(userMaria)
console.log(userMaria.getFullName())
console.log(userMaria.getReverseDNI())