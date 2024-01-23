// function 기본 구문
function function_name(params) {
    return 0;
}

// call function
function_name(5);

// 예제
function function_name(params) {
    return params;
}

// undefined
function_name(5);
// 5

// 일반적인 function의 구조
function calculateSum(param_first, param_second) {
    result = param_first+param_second;
    return result;
}
// undefined
result = calculateSum(3, 5);
// 8

// arrow function 기본 구문
let arrow_function = (params) => {
    return 0
}

// 자바스크립트는 function 생상자가 있음. so 위와 같이 function을 생성할 수 있음. 
// 일반적인 function 구조와 arrow function 내부 사용 기본 구문 비교해서 보기
// arrow function 내부 사용 기본 구문
(params) => {
    console.log();
}