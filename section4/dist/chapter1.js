/**
 * 함수 타입 정의
 */
//어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지 이야기
function func(a, b) {
    return a + b;
}
//화살표 함수의 타입을 정의
const add = (a, b) => a + b;
//함수의 매개변수
function introduce(name = "박주찬", tall) {
    console.log(`name : ${name}`);
    console.log(`키 : ${tall}`);
}
introduce("박주찬", 184);
introduce("박주찬");
export {};
