/**
 * 접근 제어자
 * public private protected
 */


class Employee {
    name : string;
    age : number;
    position : string;

    constructor(name:string,age:number,position:string){
        this.name=name;
        this.age=age;
        this.position=position;
    }

    work(){
        console.log("일함")
    }
}

const employee1 = new Employee("박주찬",26, "사장");
