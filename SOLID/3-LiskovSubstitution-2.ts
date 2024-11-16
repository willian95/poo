interface SuperInterface {
    fly(): void;
}

class SuperClass implements SuperInterface {
    fly(): void {
        console.log('I can fly as a SuperHero');
    }
}

class SuperVillain implements SuperInterface {
    fly(): void {
        console.log('I can fly as a Villain');
    }
}

const character = new SuperClass();
character.fly()