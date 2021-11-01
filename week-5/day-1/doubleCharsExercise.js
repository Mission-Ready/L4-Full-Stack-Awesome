function hasDoubleChars(s) {
    // loop through each character of the string
    for (let i = 0; i < s.length; i++) {
        // check if next character is equal to the current character
        if (s[i] === s[i+1]) {
            return true
        }
    }
    return false
}

console.log(hasDoubleChars('book'));