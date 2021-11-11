const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/getPosts', (req, res) => {
    let posts = fs.readFileSync('blogPosts/posts.json', 'utf8')
    posts = JSON.parse(posts)
    res.json(posts)
})

app.get('/post/:postNumber', (req, res) => {
    let posts = fs.readFileSync('blogPosts/posts.json', 'utf8')
    posts = JSON.parse(posts)
    res.json(posts[req.params.postNumber])
})

app.post('/createPost', (req, res) => {
    const title = req.body.title
    const content = req.body.content

    let posts = fs.readFileSync('blogPosts/posts.json', 'utf8')
    posts = JSON.parse(posts)

    posts.push({title: title, content: content})

    fs.writeFile('blogPosts/posts.json', JSON.stringify(posts), (err) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log('Post created')
            res.sendStatus(200)
        }
    })
})

app.get('/deletePost/:postNumber', (req, res) => {
    const postNumber = req.params.postNumber

    let posts = fs.readFileSync('blogPosts/posts.json', 'utf8')
    posts = JSON.parse(posts)

    posts.splice(postNumber, 1)

    fs.writeFile('blogPosts/posts.json', JSON.stringify(posts), (err) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log('Post deleted')
            res.sendStatus(200)
        }
    })
})

app.listen(4000)