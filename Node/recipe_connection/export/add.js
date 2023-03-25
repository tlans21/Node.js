//add.js

module.exports = function(a, b){
    return {
        add : function() {
            return a + b;
        }
    };
}

// module.exports는 하나의 속성이나 메소드밖에 만들지 못한다.
