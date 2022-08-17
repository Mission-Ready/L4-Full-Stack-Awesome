async function doSomethingAsync() {
  const myNewPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('We are done !'), 4000);
  });
  
  // myNewPromise.then((success) => console.log(success));
  try {
    const result = await myNewPromise;
  }
  catch {
    //what to do if things go wrong.    
  }
  // suspending this fn until myNewPromise is done.
  console.log(result);
}

console.log('Code running !!');
doSomethingAsync();
