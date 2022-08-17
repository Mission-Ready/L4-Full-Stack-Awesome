// Push method
console.log('push Method');
const pushArray = ['first item', 'second item', 'third item', 'fouth item'];
console.log('push array = ' + pushArray);

pushArray.push('fifth item');
console.log('push array = ' + pushArray);

console.log('');

//forEach method
console.log('forEach Method');
const forEachArray = ['first item', 'second item', 'third item', 'fouth item'];
console.log('forEach array = ' + forEachArray);

forEachArray.forEach((item, index) => {
  console.log(item);
});

console.log('');

//map method
console.log('map Method');
const mapArray = [0, 1, 2, 3];
console.log('initial Array = ' + mapArray);

const ArrayAfterMapping = mapArray.map((item, index) => {
  return item + 1;
});
console.log('mapped array = ' + ArrayAfterMapping);

console.log('');

// includes method
console.log('includes Method');
const arrayOfThings = ['books', 'pens', 'paper', 'pencils', 'words'];
console.log('Array of things = ' + arrayOfThings);

console.log('Does the array contain paper? ' + arrayOfThings.includes('paper'));

console.log('');

// sort method
console.log('sort Method');
const unsortedArray = [0, 10, 4, 5, 7, 11, 9, 3];
console.log('unsorted array = ' + unsortedArray);

unsortedArray.sort((a, b) => a - b);
unsortedArray.sort((a, b) => b - a);

const characters = [
  { name: 'Tom Sawyer', birthdate: 1876, death: 1945 },
  { name: 'Bart Simpson', birthdate: 1989, death: 2017 },
  { name: 'Peter Griffin', birthdate: 1999, death: 2014 },
];

const sortByDoB = (charsArray) => {
  return charsArray.sort((a, b) => a.birthdate - b.birthdate);
};
console.log(sortByDoB(characters));

const sortByDeathYear = (charsArray) => {
  return charsArray.sort((a, b) => a.death - b.death);
};
console.log(sortByDeathYear(characters));

const sortByName = (charsArray) => {
  return charsArray.sort((a, b) => a.name.localeCompare(b.name));
};

console.log(sortByName(characters));

console.log('sorted array = ' + unsortedArray);

console.log('');

// sort by age exercise
const people = [
  { name: 'john', age: 25 },
  { name: 'frank', age: 53 },
  { name: 'dave', age: 32 },
  { name: 'lisa', age: 19 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);

console.log('');

// filter Method
console.log('filter Method');

const unfilteredArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('unfiltered array = ' + unfilteredArray);

const filteredArray = unfilteredArray.filter((item) => item > 4);
console.log('filtered array = ' + filteredArray);

console.log('');

// word length filter exercise
const randomWords = [
  'word',
  'pen',
  'apple',
  'alongword',
  'mouse',
  'thiswordhasatleast6chars',
];

console.log(randomWords.filter((word) => word.length > 4));

// Filter Method

const tasks = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
];

// What Filter does => Keeps the elements that match a criteria 
const completedTasks = tasks.filter((task) => task.completed === true);

// Version 2
const completedTasks = tasks.filter(task => task.completed === true);

// Version 3
const completedTasks = tasks.filter(task => task.completed);

// splice Method
console.log('splice Method');

const originalArray = ['first item', 'second item', 'third item', 'fouth item'];
console.log('original array = ' + originalArray);

originalArray.splice(2, 1);
console.log('spliced array = ' + originalArray);


const nums = [0,1,2,3,4,5,6,7,8,9];

const removeNums = (nums) => {
  nums.splice(3,5); //we start at index 3 and remove 5 elements
}
console.log(nums);
removeNums(nums);
console.log(nums);


// reduce Method
console.log('reduce Method');

const someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('array = ' + someArray);

// *Without*
// an initial value, preValue gets the first element of the array and the curValue becomes the second element,
// ie, preValue => someArray[0] - first element
// ie, curValue => someArray[1] - second element

const reducedValue = someArray.reduce(
  (preValue, curValue) => {
    return preValue + curValue
  }
);


// *With an initial value*
// an initial value, preValue gets the first element of the array and the curValue becomes the second element,
// ie, preValue => the initial value - 1000
// ie, curValue => someArray[0] - first element
const reducedValue = someArray.reduce(
  (preValue, curValue) => {
    return preValue + curValue
  },
  1000
);

let sum = 0;
for (let i = 0; i < someArray.length; i++) {
   sum = sum + someArray[i];
}


console.log('current  values = ' + curValue);
console.log('reduced value = ' + reducedValue);
