const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const pathDir = require('./utils/path.js');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded());
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(pathDir,'views','contactus.html'));
})
app.post('/contact',(req,res)=>{
    console.log(req.body);
    res.send('success');
})

app.listen(4000);