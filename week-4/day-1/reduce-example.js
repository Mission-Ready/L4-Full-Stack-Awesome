const someArray = [2,1,3,6,4,8,10];

someArray.map((item) => console.log(item));

someArray.reduce((preValue, curValue) => {
  return preValue + curValue;
});

/* First Iteration
  ================
  preValue => Value of the first array element
  curValue => Value of the second array element
*/

/* After the first iteration
  ================
  preValue => Sum of the preValue & curValue in the last round.
           => Value that was returned in the previous iteration.
  curValue => Value of the current array element
*/