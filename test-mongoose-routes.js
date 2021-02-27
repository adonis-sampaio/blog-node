//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'More about my new blog'
    })
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
        })
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        }).catch((error) => {
            console.log(error)
        })
})

app.get('/single-blog', (req, res) => {
    Blog.findById("6036c2eb45f0d605f818eec0")
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error);
        })
})