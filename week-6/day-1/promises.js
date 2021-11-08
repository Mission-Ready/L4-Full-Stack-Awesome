// example of using fetch with .then() method
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((res) => console.log(res))

const variable = fetch('https://jsonplaceholder.typicode.com/users')
console.log(variable)

// simple promise object
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Congrats, your promise was resolved!')
    }, 2000)
})

// simple fetch API recreation
function fakeFetch(url) {
    return (
        new Promise((resolve, reject) => {
            if (url.trim().length > 0) {
                setTimeout(() => {
                    resolve('Here is the data from your API.')
                }, 2000)
            } else {
                reject('The url was invalid :(')
            }
        })
    )
}

// calling the fakeFetch API 
fakeFetch('')
.then(res => console.log(res))
.catch(err => console.log(err))

// // Exercise 1 answer
// function sayHello() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('hello world')
//         }, 3000)
//     })
// }
// sayHello()
// .then(res => console.log(res))

// // Excercise 2 answer
// function nameTest(name) {
//     return (
//         new Promise((resolve, reject) => {
//             if (name === 'jad') {
//                 return resolve('Yes')
//             } else {
//                 return reject('No')
//             }
//         })
//     )
// }
// nameTest('jad')
// .then(res => console.log(res))
// .catch(err => console.log(err))

// // async await example
// async function asyncFetch() {
//     const fetchResult = await fetch('https://jsonplaceholder.typicode.com/users')
//     const fetchJson = await fetchResult.json()
//     console.log(fetchJson)
// }
// asyncFetch()

// // async await example arrow func
// const asyncFetchArrow = async () => {
//     const fetchResult = await fetch('https://jsonplaceholder.typicode.com/users')
//     const fetchJson = await fetchResult.json()
//     console.log(fetchJson)
// }
// asyncFetchArrow()

// // Exercise 3 answer
// async function callSayHello() {
//     const hello = await sayHello()
//     console.log(hello)
// }
// callSayHello()

// // try catch example
// async function callFakeFetch() {
//     try {
//         const myFetch = await fakeFetch('http://url.com')
//         console.log(myFetch)
//     } catch (err) {
//         console.log(err)
//     }
// }
// callFakeFetch()

// // Exercise 4 answer
// async function callNameTest() {
//     try {
//         const nameTestRes = await nameTest('jad')
//         console.log(nameTestRes)
//     } catch (err) {
//         console.log(err)
//     }
// }
// callNameTest()