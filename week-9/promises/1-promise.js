const fetch = require('node-fetch'); // npm i node-fetch@2

// fetch => returning a promise.
fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
)
  .then((response) => response.json()) // .json() => returning a promise.
  .then((data) => {
    console.log(data[0].name); // run only if .json is successful
  })
  .catch((error) => {
    // run if there is any error in the promise chain.
    // Either in the fetch() or json()
    console.log('Some error', error); 
  });

  // Then & Catch => Consuming code, ie code run after the promise is settled (successfull or rejected)
