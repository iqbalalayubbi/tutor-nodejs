const express= require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// connection mongodb
require('./utils/connection');
const Note = require('./utils/model');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res) => {
    res.cookie('key','123');
    res.send('hello cookie')
})
const validate = (req,res) => {
    const {cookies} = req
    console.log(cookies.key) 
}

app.get('/login',(req,res) => {
    if (req.cookies.key !== undefined){
        res.send('berhasil login')

    }
    res.send('gagal login')
})

app.get('/remove',(req,res) => {
    res.clearCookie("key");
    res.send('cookie dihapus')
})


app.listen(port,() => console.log(`server running on http://localhost:${port}`))