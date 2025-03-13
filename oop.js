//4 pillars of OOP: Encapsulation, Abstraction, Inheritance, Polymorphism
let name = 'World!';
console.log('Hello', name);

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    } ,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

let number = {value: 10};

function increase(number){
    number.value++;
};

increase(number);
console.log(number);