//enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입


// enum Role {
//     ADMIN =0,
//     USER =1,
//     GUEST =2
// }

// 숫자를 지정하지 않아도 알아서 숫자를 지정해준다. /시작하는 숫자를 따로 지정할수가 있다.
enum Role {
    ADMIN ,
    USER ,
    GUEST 
}

enum Language{
    korea="ko",
    english="en"
}


const user1={
    name:"주찬",
    role: Role.ADMIN, //0 <-관리자
    language:Language.korea
}

const user2={
    name:"홍길동",
    role: Role.USER //1 <- 일반 유저
} 

const user3={
    name:"아무개",
    role: Role.GUEST // 2 <- 게스트
}

console.log(user1,user2,user3)