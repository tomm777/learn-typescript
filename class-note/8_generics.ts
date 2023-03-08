// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText('abc'); // 문자열 abc
// logText(123);   // 숫자 123
// logText(false); // 진위값 false

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');


function logNumber(num: number){
    console.log(num);
    return num;
}

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

const num = logNumber(10);

// 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
// const obj: Dropdown = {value: 'test', selected: false};

interface Dropdown<T>{
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = {value: 'abc', selected: false}

// 제네릭의 타입 제한

function logTextLength<T>(text: T[]): T[]{
    text.forEach(function (text){
        console.log(text);
    });
    return text;
}
logTextLength<string>(['hi','shy']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength2<T extends LengthType>(text: T): T{
    text.length;
    return text;
}
logTextLength2('a');
// logTextLength2(10);
logTextLength2({length : 10});

//  
// 제네릭 타입 제한 3- keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
// ShoppingItem에 있는 키 중에 한가지가 제네릭이됨 
// name: string, price: number 둘중 하나
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('aabc')

getShoppingItemOption("name");


