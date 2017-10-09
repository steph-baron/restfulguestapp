var express = require('express');
var app = express();

//Below is middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());


var guests = [{"name": "Steve"}, {"name": "Ricky"}];

//READ All Request
app.get('/guests', function (req, res){
  res.send(guests);
})

// READ One Request
app.get('/guests/:id', function (req, res){
  res.send(guests[req.params.id]);
})

//CREATE - line 17 is incoming data
app.post('/guests', function(req, res){
  var guest = req.body;
  console.log(guest);
  guests.push(guest);
  res.send(guest);
})

//UPDATE
app.put('/guests/:id', function(req, res){
  var index = req.params.id;

  var guest = req.body;

  guests[index] = guest;
  res.send(guest);
})

// DELETE
app.delete('/guests/:id', function(req, res){
  var index = req.params.id;
  for(var i = 0; i < guests.length; i++){
    if (i === index){
      delete guests[i];
    }
  }

})

app.listen(3000, function(){
  console.log("You are listening to port 3000...");
})
