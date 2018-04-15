var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const route = require('./route/router');

//Connect with links.csv





const PORT = 3000;

//cors middleware

app.use(cors());

//body parser
app.use(bodyparser.json());

app.use('/api', route); 

app.get('/',(req,res)=>{
    res.send('Yeoo!! Solaiman ');
});

app.listen(PORT, ()=>{
    console.log('Server has been started at port:'+PORT);
}); 