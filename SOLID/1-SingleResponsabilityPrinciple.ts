//Wrong way
class Route {
    constructor(public title: string, public startTime: Date) {}

    showInfo(): void {
        console.log(`Route name: ${this.title}, starts at: ${this.startTime}`);
    }

    storeInFile(fileName: string): void {
        console.log(`Route name: ${this.title}, starts at: ${this.startTime} stored in file ${fileName}`);
    }
}

const route = new Route('Route 60', new Date());
route.showInfo();
route.storeInFile('route.txt');

console.log("                 ")

//Right way

class RouteSolid{
    constructor(public title: string, public startTime: Date) {}
}

class RouteSolidPrinter{
    static showInfo(route: RouteSolid): void {
        //Hacer el split luego de explicar el principio de responsabilidad única
        console.log((`Route name: ${route.title}, starts at: ${route.startTime}`).split('').reverse().join(''));
    }
}

class RouteSolidFileStore{
    static storeInFile(fileName:string, route: RouteSolid): void {
        console.log(`Route name: ${route.title}, starts at: ${route.startTime} stored in file ${fileName}`);
    }
}

const routeSolid = new RouteSolid('Route 68', new Date());
RouteSolidPrinter.showInfo(routeSolid);
RouteSolidFileStore.storeInFile("routeSolid.txt", routeSolid);