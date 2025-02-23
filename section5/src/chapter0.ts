/**
 * 인터페이스
 */

interface Person {
    readonly name:string;
    age?:number;
    sayHi () : void
}

const person:Person ={
    name:"박주찬",
    age:27,
    sayHi : function (){
        console.log("Hi")
    },
};