/**
 * 클래스
 */
class Student {
    //필드
    name;
    grade;
    age;
    //생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    study() {
        console.log("열심히 공부 함");
    }
    ;
    introduce() {
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
    ;
}
let studentB = new Student("박주찬", "A+", 27);
console.log(studentB);
class StudentDeveloper extends Student {
    favoriteSkill;
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}
const studentDeveloper = new StudentDeveloper("박주찬", "A+", 27, "ts");
console.log(studentDeveloper);
studentDeveloper.programming;
export {};
