const input = document.querySelector('input')
const checkMessage = document.querySelector('p')

document.querySelector('button').addEventListener('click', checkPassword)

function checkPassword() {
    const regex = /^[A-Z]\w{7,}\d/gm;
    const result = regex.test(input.value);
    
    if (result === true) {
        checkMessage.textContent = 'Password valid'
    } else {
        checkMessage.textContent = 'Password invalid :('
    }
}