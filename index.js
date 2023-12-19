const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

const adminRoutes = require('./routes/admin')

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);

// app.set('view engine', 'html');
// app.set('views', path.join(__dirname, 'views'));

// app.get('/',(req,res,next)=>{
//     console.log('AT HOME!!')
//     res.sendFile('home.html', { root: path.join(__dirname, 'views/') });
// })


app.listen(3000,()=>{
    console.log('working')
})
