function first() { 
	second(); 
} 

function second() { 
	third(); 
} 

function third() { 
	console.log('I am the third function') 
} 

function boss() { 
	first(); 
} 

boss(); // call the boss function