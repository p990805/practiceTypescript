//배열
let numArr = [1, 2, 3];
let strArr = ["hello", "juchan", "kiki"];
let boolArr = [true, false, true];
let boolArr2 = [false, true, false];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
let multiArr2 = [1, "hello"];
//다차원
let doubleArr = [
    [1, 2, 3],
    [2, 3, 4]
];
//튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "2", true];
// 배열로 받아들이기 때문에 push나 pop을 해도 오류가 안남
// 오류가 안나기 때문에 쓸 때 신중하게 써야함함
tup1.push(1);
tup2.pop();
const users = [
    ["a", 1],
    ["b", 1],
    ["c", 3],
    ["d", 2],
    ["E", 5]
];
export {};
