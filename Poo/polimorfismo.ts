class companyUser{
    name: string;
    age: number;
    company: string;

    constructor(name: string, age: number, company: string){
        this.name = name;
        this.age = age;
        this.company = company;
    }

    showData(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Company: ${this.company}`);
    }

}

class Developer extends companyUser{
    programmingLanguage: string;

    constructor(name: string, age: number, company: string, programmingLanguage: string){
        super(name, age, company);
        this.programmingLanguage = programmingLanguage;
    }

    showData(){
        super.showData();
        console.log(`Programming Language: ${this.programmingLanguage}`);
    }
}

const normalUser = new companyUser('John Doe', 30, 'Google');
normalUser.showData();

console.log("     ")

const developer = new Developer('Jane Doe', 25, 'Microsoft', 'JavaScript');
developer.showData();