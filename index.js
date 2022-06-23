//4. 함수에 타입지정하려면 2곳 가능
//1) 함수로 들어오는 자료 (파라미터) -파라미터 옆에 적으면 됌 그리고 파라미터에 타입을 지정하면 필수 파라미터가 됌
//2)함수에서 나가는 자료 (return) - return 우측에 있는 값에 타입지정하고 싶으면 함수명() 우측에 적으면 됌
function 내함수(x) {
    return x * 2;
}
//함수는 특이하게도 void라는 타입을 사용가능
//void란 '아무것도 없이 공허함'을 뜻하는 타입인데 return할 자료가 없는 함수의 타입으로 사용가능
function 내함수2(x) {
    return x * 2; //여기서 에러남 
}
//함수에 return 방지장치를 주고 싶을 때 void 타입을 활용하기
// 4-1. 파라미터가 옵션일 경우
//함수에 파라미터 없이 쓰고 싶을 때 타입스크립트에선 미리 "이 파라미터는 옵션임" 이렇게 정의를 해주셔야 에러가 나지 않는다.
function 내함수3(x) {
}
내함수3(); //가능
내함수3(2); //가능
//위와 같이 파라미터 우측에 그냥 물음표치면 됩니다. 그럼 앞으로 내함3수()를 사용할 때 파라미터없이도 쓸 수 있음!
//사실 ?는 x : number | undefined 이거랑 똑같은 의미 (매우 중요) 즉, 파라미터가 정의가 안되면 자동으로 undefined가 되니까 그걸 반영한거라고 볼 수 있음(옵션으로 처리)
