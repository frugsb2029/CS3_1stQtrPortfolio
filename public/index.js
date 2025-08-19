// run mode index.js in the terminal

console.log('Hello, Sodium!');

var num_chores = 5;
var jeds_bday = -1;

if (num_chores > 5) {
console. log('more moolah! :D ');
} else if (jeds_bday) {
console. log('more allowance!!');
} else {
console. Log('nah');
}

// int numbers [5];
// numbers[0]

array = [];

/*
for(int i = 0; i< 10; i++){
array[i] = 1*2;
}
*/

for (var i = 0; i < 10; i++) {
array.push(i * 2);
// array[i] = i * 2;
}

console.log(array.length, array);

function add(x, y) {
 console. log(x + y);
}

add(2, 3);

function add(x, y) {
 console. log(x + y);
}
function subtract(x, y) {
console. log(x - y);
}
function multiply(x, y) {
     console. log(x * y);
}
function divide(x, y) {
if (y != 0) {
        console. log(x / y);
} else {
        console. log('error');
    }
}
function random (){
    console.log((Math.random()*10).toFixed(0));
}

add (2, 3);
subtract (3, 4);
multiply(4, 5);
divide (5, 6);
random ();

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    random,
};

