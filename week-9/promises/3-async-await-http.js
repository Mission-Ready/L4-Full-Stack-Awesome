const fetch = require('node-fetch'); // npm i node-fetch@2

async function getData() {
  // await - pauses execution until the promise is settled (either resolved - successful or rejected - failed)
  const data = await fetch(
    'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
  );
  const jsonData = await data.json();
  // data.json().then((data) => console.log(data));
  console.log(jsonData);
}

getData();
