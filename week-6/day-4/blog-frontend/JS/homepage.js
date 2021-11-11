fetch('http://localhost:4000/getPosts')
.then(res => res.json())
.then(res => {
    const postsList = document.getElementById('postsList')
    res.forEach((post, index) => (
        postsList.innerHTML += `<div onclick="postClick(${index})" class="postDisplay">${post.title}</div>`
    ))
})


function postClick(index) {
    window.location = `post.html?post_id=${index}`
}