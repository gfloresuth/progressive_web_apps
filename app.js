
var express=require('express');
var app = express();
var PORT = 80;

app.engine('html', require('atpl').__express);
app.set('view engine','html');
app.set('devel',false);


app.use('/', express.static(__dirname + '/public'));
app.get('/hello/',function(req,res){
    res.send('Hello world');
});

app.listen(PORT,function(){
    console.log('Server started: http://localhost:'+PORT+'/');
});