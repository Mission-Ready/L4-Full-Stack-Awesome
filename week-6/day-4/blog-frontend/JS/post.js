const url = new URL(window.location)
const postID = url.searchParams.get('post_id')

const postTitle = document.getElementById('postTitle')
const postContent = document.getElementById('postContent')

fetch('http://localhost:4000/post/' + postID)
.then(res => res.json())
.then(res => {
    postTitle.innerText = res.title
    postContent.innerText = res.content
})

function deletePost() {
    fetch('http://localhost:4000/deletePost/' + postID)
    .then(res => {
        if (res.status === 200) {
            window.location = 'index.html'
        }
    })
}