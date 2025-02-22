//void
//void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1():string {
    return "hello"
}

function func2():void{
    console.log("hello")
}

//never
//nver -> 존재하지 않는 
//불가능한 타입
// 무한 함수
// 어떠한 값도 담을수가 없음
function func3(): void{
    while(true){}
}

function fun4():never{
    throw new Error();
}

