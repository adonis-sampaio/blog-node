const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//Connect to MongoDb
const dbURI = "mongodb+srv://adonis:adonis97@cluster0.w7rkz.mongodb.net/node-blogs?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connected to DataBase")
        app.listen(3000)
    })
    .catch((error) => console.log(error));

//register view engine
app.set('view engine', 'ejs');

//Listen for request


//Middleware & Static Files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// app.use((req, res, next) => {
//     console.log("New Request Made: ");
//     console.log("Host: ", req.hostname);
//     console.log("Path: ", req.path);
//     console.log("Method: ", req.method);
//     next();
// })

app.use((req, res, next) => {
    //console.log("In the next Middleware ");
    next();
})


app.get('/', (req, res) => {
   res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About"})
})

//Blog Routes
app.use("/blogs", blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: "Not Found"});
})

