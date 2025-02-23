/**
 * 타입 스크립ㅌ느 클래스
 */
class Employee {
    name;
    age;
    position;
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    work() {
        console.log("일함");
    }
}
const newEmployee = new Employee("박주찬", 27, "사장");
console.log(newEmployee);
export {};
