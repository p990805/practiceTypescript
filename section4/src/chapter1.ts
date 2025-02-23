/**
 * 함수 타입 정의
 */

//어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지 이야기
function func(a:number,b:number){
    return a+b;
}

//화살표 함수의 타입을 정의

const add =(a:number,b:number) => a+b;

//함수의 매개변수
// 필수 매개변수는 앞에다가 둬야한다.

function introduce(name:string ="박주찬", tall?:number) : void{
    console.log(`name : ${name}`);
    console.log(`키 : ${tall}`);
}

introduce("박주찬", 184);
introduce("박주찬");


function getSum(...rest : number[]){
    let sum =0;
    rest.forEach((it)=> (sum+=it));
    return sum;
}

getSum(1,2,3);
getSum(1,2,3,4,5);