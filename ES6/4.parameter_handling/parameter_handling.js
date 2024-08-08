/*
    매개변수 기본값 : 
    - 함수 호출시 매개변수를 전달하지 않으면 사용할 기본 값을 지정
*/
const add = (a = 5, b = 10) => a + b;
console.log(add());     // undefined 연산
console.log(add(50, 99));

console.log('========================================');

/*
    rest 매개변수 : 
    - 함수 선언시 매개변수 앞에 ...을 붙여서 정의한 매개변수
    - 함수에 전달받은 매개변수의 배열을 전달 받음
    - 
*/
const restFunction = (...arg) => console.log(arg);
restFunction(1, 2, 3, 4, 5);

console.log('========================================');

/*
    spread 연산자 : 
    - 
    - 
*/



console.log('========================================');