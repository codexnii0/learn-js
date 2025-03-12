// This is my first code!
console.log('Hello World!');

let name = 'michael';
console.log(name);
// cannot be a reserved keyword
// should be meaningful 

let rate = 0.5;
rate = 1;
console.log(rate);
//let variable can change, so you use const variable

const rates = 0.5;
//rates = 1; (uncomment this when trying)
console.log(rates);
//check now the error

let isOk = true;
let isNotOk = false;
console.log(isOk);
console.log(isNotOk);
//this is example of booleans - it answers true or false question only

let firstName = null;
console.log(firstName);
//this is how you do an undefine or null

firstName = 'Michael';
lastName = 'Codex';

//now using Objects------------
let person = {
    firstName: 'Michael',
    lastName: 'Codex'
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);

//use dot notation to change value inside object
person.firstName = 'John';

console.log(person);
console.log(person.firstName);
console.log(person.lastName);

// ARRAYS-----------
let selectedColors = ['red','blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);

// FUNCTIONS-----------
function greet(pangalan) { //<-------- what ever you put inside of parenthesis is called a 'parameter'
    console.log('Hello', pangalan + '!');
}

greet('Michael'); //<------------ what ever you put inside of parenthesis to call the parameter is 'argument'