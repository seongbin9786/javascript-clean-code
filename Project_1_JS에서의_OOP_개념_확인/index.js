/*
JS에서 private 멤버 변수를 선언하는 방법이 있다고 한다.
아래는 Chrome 콘솔 출력 결과이다.

    const Circle = function(r) {
        const radius = r;
    }
    >undefined

    circle = new Circle();
    >Circle {}

    circle.radius
    >undefined
*/
const Circle = function(r) {
    const radius = r;
}

/*
생성자 함수 내에선 this가 아닌 변수 선언이 가능하지만,
ES6의 Class 내부에서도 사용할 수 있을까?

1. 일단 const/let/var로 변수를 선언하는 것은 가능하지 않다.
2. this는 가능하지만 public 멤버 변수이다.
3. 클래스 내부에서 멤버 변수를 선언할 순 없다고 한다. (공식적인 문법이 없다.)
*/
const CircleClass = class {
    // Uncaught SyntaxError: Unexpected identifier
    const radius;

    constructor(r) {
        radius = r;
    }
}

/*
Class에서 멤버 변수를 사용하는 방법은 없을까?
- 공식적으로 제공되는 기능은 없기 때문에, 이런 저런 방법을 사용해 private을 구현해야 한다.

<1번 방법 - 생성자 함수 내에 변수 선언>

1. 클래스의 생성자 함수는 함수이기 때문에, 함수 내에서 private 변수를 선언한다.
2. 해당 변수를 사용하는 메소드를 this에 정의한다. (public)



*/
class PersonClass {
    constructor(name) {
        var _name = name
        this.setName = function(name) { _name = name; }
        this.getName = function() { return _name; }
    }
}

function Person(name) {
    var _name = name
    this.setName = function(name) { _name = name; }
    this.getName = function() { return _name; }
}

