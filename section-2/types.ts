//string
let myName: string = 'Murilo';
// myName = 20;

// number
let myAge: number = 26;
// myAge = 'Murilo'

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

let myRealAge: number;
myRealAge = 26.5;

// array
let hobbies = ['Cooking', 'Sports'];
// hobbies = [100]
hobbies = ['a string'];

let anyArray: any[] = ['String', 'String 2'];
anyArray = [100];

// tuples
let address: [string, number] = ['Street', 99];

// enum
enum Color {
  Gray, //0
  Green = 100, //1
  Blue = 2 //2
}
let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = 'bmw';
car = { brand: 'bmw', series: 3};
console.table(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 'teste'));
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: {name: string, age: number} = {
  name: 'Murilo',
  age: 26
};


// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// tyle alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
// myRealRealAge = true;

// check types
let finalValue = 27;
if (typeof finalValue == 'number') {
  console.log('Final value is a number!');
}

// never type
function neverReturns():never {
  throw new Error('An Error!');
}

// nullable type
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 10;
