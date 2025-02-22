type Dog ={
    name: string;
    color: string;
}

type Person = {
    name:string;
    language:string;
}

type Union1 = Dog | Person

let union1 :Union1={
    name:"",
    language:""
}

let union2 : Union1={
    name:"",
    color:""
}

let union3: Union1={
    name:"",
    language:"",
    color:""
}

//교집합은 오히려 합집합처럼 요소들을 모두 가지고 있는 것이 교집합이다.
type Intersction = Dog &Person

let intersction1: Intersction ={
    name:"",
    language:"",
    color:""
}