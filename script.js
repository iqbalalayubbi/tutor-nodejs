const express = require('express');
const app = express();
const port = 3000;

// bikin folder views untuk file ejs 
app.set('view engine','ejs');

// bikin folder public di root bisa include cssimage dll
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('login',{title:'login'})
})
app.get('/home',(req,res) => {
    res.render('home',{title:'home'})
})

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})

console.log("hello kamu");
