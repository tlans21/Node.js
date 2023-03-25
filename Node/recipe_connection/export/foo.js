//exports로 모듈을 만들어 객체나 속성을 정의한 모듈을 사용하기.
var circle = require('./Listing 3.4.js');

console.log(circle.area(4))
console.log(circle.circumference(4));

//이번에는 modules.exports를 사용하여 사용자 모듈 만들기
