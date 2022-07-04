/***
 * 
 * Pending => Not Fulfilled or Rejected YET
 * Settled =>
 *            * Fulfilled (successful) or
 *            * Rejected (failed)
 * */


const done = false;

// Producing code
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone); // successful => run the code in .then()
  } else {
    const why = 'Still working on something else';
    reject(why); // failed => run the code in .catch()
  }
});

/**
 *  Consuming code 
 *  ==============
    somePromise.then().catch();
 */
console.log(isItDoneYet);
isItDoneYet
  .then((data) => console.log('Promise successful. Message:', data)) // callback when successful
  .catch((error) => console.log('Promise failed. Error:', error)); // callback when failed

