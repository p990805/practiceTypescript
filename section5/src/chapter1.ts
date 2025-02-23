interface Animal {
    name:string;
    age:number;
}

interface Dog extends Animal{
    isBark:boolean;
} 

interface Cat extends Animal{
    isScratch:boolean;
}

const dog:Dog = {
    name:"",
    age:1,
    isBark:true
}

interface DogCat extends Dog,Cat {
    name:"",
    age:1,
    isBark:true,
    isScratch:false
}