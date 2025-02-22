let num1: number=10;
let num2: 10 =10;

num1 =num2;


type Animal ={
    name:string;
    color:string;
};

type Dog={
    name:string;
    color:string;
    bread:string;
}

let animal:Animal={
    name:"기린",
    color:"yellow"
}

let dog:Dog={
    name: "돌돌이",
    color:"brown",
    bread:"진도"
}

animal = dog
// dog=animal

type Book ={
    name: string;
    price:number;
}

type ProgrammingBook={
    name:string;
    price:number;
    skill:string;
}

let book:Book;

let programmingBook:ProgrammingBook={
    name:"해리포터",
    price:3000,
    skill:"react.js"
}