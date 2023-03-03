// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hi');
// logMessage(123);

// Union Type
// ex) string OR number

function logMessage(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string of number');
}
logMessage("hello")
logMessage(100)

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
// 유니온 타입
function askSomeone(someone: Developer | Person){
    // 공통된 속성만 접근가능
    // someone.name;
}
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 26});

// 인터섹션 타입
function askSomeone1(someone: Developer & Person){
    someone.name;
    someone.age;
    someone.skill
}
// Developer & Person 의 속성을 모두 지정해 줘야함
askSomeone1({name: '디벨로퍼', skill: '웹 개발', age: 12})


// var seho: string | number | boolean;
// var cappt: string & number & boolean;
