// type 은 확장이 불가함
// interface는 확장이 용이함
interface Person1 {
    name : string;
    age : number;
}

type Person2 = {
    name: string;
    age: number;
}
var gibum: Person1 ={
    name: "기범",
    age : 26
}

type MyString = string;
var str: MyString = 'Hi';

type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}