function sendLogin(e) {
    // prevent page from refreshing when form is submitted
    e.preventDefault();

    // select both email and password inputs
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    const loginResultDiv = document.getElementById('loginResult')

    // get values of email and password inputs
    const email = emailInput.value
    const password = passwordInput.value

    fetch('http://localhost:4000/loginWithFetch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: email, password: password})
    }) // no need for res.json() because we are only sending back a status code
    .then(res => {
        if (res.status === 200) {
            loginResultDiv.innerHTML = '<span style="color: green">Login Successful</span>'
        } else if (res.status === 400) {
            loginResultDiv.innerHTML = '<span style="color: red">Login Failed</span>'
        }
    })
}