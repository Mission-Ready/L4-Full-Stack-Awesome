// Push method
console.log('push Method')
const pushArray = ["first item", "second item", "third item", "fouth item"];
console.log('push array = ' + pushArray)

pushArray.push('fifth item');
console.log('push array = ' + pushArray);

console.log('');

//forEach method
console.log('forEach Method')
const forEachArray = ["first item", "second item", "third item", "fouth item"]
console.log('forEach array = ' + forEachArray)

forEachArray.forEach((item, index) => {
    console.log(item);
})

console.log('');

//map method
console.log('map Method')
const mapArray = [0, 1, 2, 3];
console.log('initial Array = ' + mapArray)

const ArrayAfterMapping = mapArray.map((item, index) => {
    return item + 1
})
console.log('mapped array = ' + ArrayAfterMapping)

console.log('');

// includes method
console.log('includes Method');
const arrayOfThings = ['books', 'pens', 'paper', 'pencils', 'words'];
console.log('Array of things = ' + arrayOfThings);

console.log('Does the array contain paper? ' + arrayOfThings.includes('paper'));

console.log('')

// sort method
console.log('sort Method');
const unsortedArray = [0, 10, 4, 5, 7, 11, 9, 3];
console.log('unsorted array = ' + unsortedArray)

unsortedArray.sort((a, b) => a - b);
console.log('sorted array = ' + unsortedArray);

console.log('')

// sort by age exercise
const people = [
    {name: 'john', age: 25},
    {name: 'frank', age: 53},
    {name: 'dave', age: 32},
    {name: 'lisa', age: 19}
]

people.sort((a, b) => a.age - b.age)

console.log(people)

console.log('')


// filter Method
console.log('filter Method');

const unfilteredArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('unfiltered array = ' + unfilteredArray)

const filteredArray = unfilteredArray.filter((item) => item > 4)
console.log('filtered array = ' + filteredArray)

console.log('')

// word length filter exercise 
const randomWords = ['word', 'pen', 'apple', 'alongword', 'mouse', 'thiswordhasatleast6chars']

console.log(randomWords.filter((item) => item.length > 4))

console.log('')

// splice Method
console.log('splice Method');

const originalArray = ["first item", "second item", "third item", "fouth item"];
console.log('original array = ' + originalArray)

originalArray.splice(1, 3)
console.log('spliced array = ' + originalArray)

console.log('')

// reduce Method
console.log('reduce Method');

const someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('array = ' + someArray)

const reducedValue = someArray.reduce((a, b) => a + b);
console.log('reduced value = ' + reducedValue)