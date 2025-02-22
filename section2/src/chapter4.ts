//타입 별칭
type User = {
    id:number,
    name:string,
    nickname:string,
    birth:string,
    bio:string,
    location:string
}

let user:User={
    id:1,
    name:"주찬",
    nickname : "hi",
    birth:"1999",
    bio:"hi",
    location:"fd"
}

// 이렇게 하면 굉장히 코드가 길어짐


// 인덱스 시그니처 키와 벨류가 모두 스트링일 경우
type CountryCodes={
    [key:string]:string
}
let countryCodes:CountryCodes ={
    Korea:"ko",
    UnitedState:"us",
    UnitedKingdom: "uk"
}

type CountryNumberCodes={
    [key:string]:number
    Korea:number //이거는 약간 필수조건들
}

let countryNumberCodes:CountryNumberCodes={
    Korea :410,
    UnitedState:840,
    UnitedKingdom:826
}