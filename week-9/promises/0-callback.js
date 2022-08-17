// A fn that uses callback fn
// yourCallbackFn is called after some process is done
// Producing code => code that takes some time (aync operation)
function callMeAfterSomeTime(yourCallbackFn) {
  setTimeout(() => {
    yourCallbackFn();
  }, 5000);
}

// Consuming code => Run after some operation is successfull
callMeAfterSomeTime(() => console.log('Hi there'));

// here the callback happens after the file is read
// Time consuming process => reading the file => normally blocking
fs.readFile('somefile.js', 'utf-8', () => {
  console.log('Hi there')
});