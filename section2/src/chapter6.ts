//any
// 특정 변수의 타입을 우리가 확실히 모를때
// 타입스크립트 검사를 통과하는 치트키 간은거
// 최대한 사용을 x

let anyVar:any =10;
anyVar="hello";

//unknown
let unknownVar: unknown;
unknownVar="",
unknownVar=1;
unknownVar=()=>{};

let num:number =10;

// unknown은 아무 타입이나 넣을 수 없기 때문에 이게 조금더 안정적임
// 그래서 무슨 값을 넣어야 할지 모르겠다면 unknown을 쓰자