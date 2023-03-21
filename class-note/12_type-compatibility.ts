// 인터페이스
interface Developer {
    name: string;
    skill: string;
}
// interface Person {
//     name: string;
//     // skill: string
// }
// var developer: Developer;
// developer = person;


class Person1 {
    name: string;
    skill: string
}
var person: Person;
var developer: Developer

developer = new Person1();

// 함수
var add = function(a: number) {

}
var sum = function(a: number, b: number){

}
sum = add;

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty2 = empty1;
empty1 = empty2;

interface NotEmpty<T> {
    data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;

