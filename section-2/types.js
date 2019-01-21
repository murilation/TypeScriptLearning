//string
var myName = 'Murilo';
// myName = 20;
// number
var myAge = 26;
// myAge = 'Murilo'
// boolean
var hasHobbies = true;
// hasHobbies = 1;
var myRealAge;
myRealAge = 26.5;
// array
var hobbies = ['Cooking', 'Sports'];
// hobbies = [100]
hobbies = ['a string'];
var anyArray = ['String', 'String 2'];
anyArray = [100];
// tuples
var address = ['Street', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = 'bmw';
car = { brand: 'bmw', series: 3 };
console.table(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'teste'));
console.log(multiply(2, 10));
// function types
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Murilo',
    age: 26
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
// myRealRealAge = true;
// check types
var finalValue = 27;
if (typeof finalValue == 'number') {
    console.log('Final value is a number!');
}
// never type
function neverReturns() {
    throw new Error('An Error!');
}
// nullable type
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 10;
//# sourceMappingURL=types.js.map