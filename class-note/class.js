function Person(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 102);

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var kibum = new Person('기범',26);   // 생성 되었습니다.
console.log(kibum);