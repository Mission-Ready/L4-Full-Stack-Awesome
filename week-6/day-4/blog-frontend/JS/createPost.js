function createPost(e) {
    e.preventDefault();

    const title = document.getElementById('postTitle').value
    const content = document.getElementById('postContent').value

    fetch('http://localhost:4000/createPost', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({title: title, content: content})
    })
    .then(res => {
        if (res.status === 200) {
            window.location = 'index.html'
        }
    })
}