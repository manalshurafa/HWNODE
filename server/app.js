const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
    var send = res.send;
    req.params({"messege":"hello","name":"Manal"}) ;
    var user_id = req.params('id');
    res.send(req.params);
    res.json({name:"taymaa"});
})
app.post('/user',(req,res)=>{
    var send = res.send;
    var user_id = req.body.id;

    res.send = function (body) {
        res.body = body
        send.call(this, body);
    };
    res.json({name:"taymaa"});
})



app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

