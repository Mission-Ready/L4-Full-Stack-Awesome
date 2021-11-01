function addNums(num1, num2) {
    return num1 + num2
}

function subtractNums(num1, num2) {
    return num1 - num2
}

function isNumber(num) {
    return Boolean(parseInt(num))
}

/*
add this to export modules this will 
add the name of the function as the property
with the function itself being the value
*/
module.exports = {
    addNums,
    subtractNums, 
    isNumber
}