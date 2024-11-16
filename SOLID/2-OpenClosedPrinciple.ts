class Printer{
    data: number[]
    constructor(data: number[]){
        this.data = data;
    }

    print(){
        console.log(this.data);
    }

}

class PrinterTimesTwo extends Printer{
    constructor(data: number[]){
        super(data);
    }

    print(){
        this.data = this.data.map((item) => item * 2);
        super.print()
    }
}

const printer = new Printer([1,2,3,4,5]);
printer.print();

console.log("==============")

const printerTimesTwo = new PrinterTimesTwo([1,2,3,4,5]);
printerTimesTwo.print();