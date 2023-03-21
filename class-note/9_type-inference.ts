// // 타입 추론 기본 1
// var a = 'abc';

// function getB(b= 10) {
//     var c = 'hi';
//     return b + c;
// }

// 10 + '10' // 1010

// // 타입 추론 기본 2
// interface DropDown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: DropDown<string> = {
//     value: 'abc',
//     title: 'hi'
// }


// 타입 추론 기본 3
interface DropDown<T> {
    value: T;
    title: string;
}
interface DetailDropDown<K> extends DropDown<K>{
    description: string;
    tag: K;
}
var detailedItem: DetailDropDown<string> = {
    title: 'abc',
    description: 'abc',
    value: 'abc',
    tag: 'abc'
}

// Best Common Type
var arr = [1,2,3,'a',true];