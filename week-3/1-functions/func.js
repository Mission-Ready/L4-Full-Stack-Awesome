// first function
function myFirstFunction() {

    console.log('I just called my first function');

}

function stringCombine(str1, str2) {
    return(str1 + ' ' + str2);
}

console.log(stringCombine());

myFirstFunction(); // This is a function call

// function with params
function FuncWithParams(num1, num2) {
    console.log(num1 + num2)
}

FuncWithParams(3, 4);

// return statements
function FuncWithParams(num1, num2) {
    return (num1 + num2);
    console.log(num1 + num2);
}

console.log(FuncWithParams(3, 4));


let funcAnswer = myFirstFunction(3, 4);

if (funcAnswer === 7) {
    console.log('the answer is right')
} else {
    console.log('the answer is wrong')
}

// Arrow function
const arrowFunc = (num1, num2) => num1 + num2;

console.log(arrowFunc(3, 4))

let player = "P1";

let playerHealth = 100;

function Attack(damageTaken) {
    playerHealth = playerHealth - damageTaken;
}

function GetHealth() {
    return playerHealth;
}

console.log('Starting Health: ', GetHealth());

Attack(10);
Attack(40);
Attack(30);

console.log('Ending Health: ', GetHealth());


function emptyString(string) {
    if (string === '') {
        return false;
    } else {
        return true;
    }
}

console.log(emptyString('dsdfsdf'))