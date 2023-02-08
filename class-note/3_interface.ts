interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
var gibum: User = {
    age : 24,
    name: 'abc'
}

// 함수의 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const cap = {
    name: "성이름",
    age : 12
}
getUser(cap)

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}
var sum: SumFunction;

sum = function(a: number,b: number) {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
arr[0] = 'abc';