// 사용자 모듈 만들기
// Listing 3.4.js

const PI = 3.14;

exports.area = function(r) {
    return PI * r * r;
};

exports.circumference = function(r) {
    return 2 * PI * r;
};