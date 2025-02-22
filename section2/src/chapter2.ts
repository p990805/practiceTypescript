//배열
let numArr:number[] =[1,2,3];
let strArr:string[] =["hello", "juchan","kiki"]

let boolArr:boolean[]=[true,false,true];
let boolArr2:Array<boolean>=[false,true,false]

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:Array<string|number> =[1,"hello"];
let multiArr2: (string|number)[] =[1,"hello"];

//다차원
let doubleArr:number[][] = [
    [1,2,3],
    [2,3,4]
];

//튜플
// 길이와 타입이 고정된 배열
let tup1:[number,number] =[1,2];

let tup2:[number,string,boolean]=[1,"2",true]

// 배열로 받아들이기 때문에 push나 pop을 해도 오류가 안남
// 오류가 안나기 때문에 쓸 때 신중하게 써야함함
tup1.push(1);
tup2.pop();

const users:[string,number][]=[
    ["a",1],
    ["b",1],
    ["c",3],
    ["d",2],
    ["E",5]
]

