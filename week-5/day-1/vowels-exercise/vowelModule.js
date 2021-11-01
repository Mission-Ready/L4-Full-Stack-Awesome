function removeVowels(s) {
    let result = '';
    const vowels = 'aeiou'
    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            result += s[i];
        }
    }
    
    return result
}

module.exports = removeVowels