/**
 * 타입 스크립ㅌ느 클래스
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

const newEmployee = new Employee("박주찬",27,"사장");
console.log(newEmployee);


const employeeC :Employee ={
    name:"",
    age:1,
    position:"",
    work(){}
}

class ExecutiveOfficer extends Employee{
    officeNumber:number;

    constructor(name:string,age:number,position:string,officeNumber:number){
        super(name,age,position);
        this.officeNumber=officeNumber;
    }
    work(){}
}