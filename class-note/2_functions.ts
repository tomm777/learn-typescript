function sumplus(a:number,b:number){
    return a + b
}
sum(10,20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function temp(a: number, b: number): number {
    return a + b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string){

}
log('hello');
log('one','hello');
