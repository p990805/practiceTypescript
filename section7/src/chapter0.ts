/**
 * 제네릭
 */

function func<T>(value:T) : T {
    return value;
}

let num = func(10);
let bol = func(true)
let str = func("hello")

//제네릭은 일반적인 포괄적인 그런뜻
