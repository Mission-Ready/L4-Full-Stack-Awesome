// let myString = 'Java$cript';
// for (i = 0; i < myString.length; i++) {
//   let A = myString[i];
//   if ('$' === A) {
//     console.log('error msg due to symbol');
//     break;
//   }
//   console.log(A);
// }

// function combineString(string1, string2) {
//   const combinedString = string1 +  " " + string2;
//   console.log(combinedString);
// }

// combineString("Hello", "World");

// function sum(firstNum, lastNum) {
//   console.log("this would be run as it is before return");
//   return firstNum + lastNum;
//   console.log("this is to be ignored");
//   console.log("Never executed");
// }

// sum(10, 22);

function checkIfEmpty(inputString) {
  if (inputString.length === 0) {
    return true;
  } else {
    return false;
  }
}

checkIfEmpty(''); // true
checkIfEmpty(' '); //false
checkIfEmpty('dsfds'); //false
