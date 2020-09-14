const path = require("path");
var express = require('Express');
var bodyParser = require('body-parser');
var data = require('./data');

var app = express();

app.set("view engine", "pug");
app.set("views","./public")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.get("/", (req, res) => {
   res.render("index", {title: "Search"});
})

app.post("/result", (req, res) => {
   const found = (data.some(data => data.id === parseInt(req.body.id)));
   if(found){
      data.filter(data=>{
         if(data.id === parseInt(req.body.id)){
            res.send(`Name: `+data.name)
         }      
      });
   }else{
      res.send("Data not found");
   }
})

app.listen(4200, () => {
    console.log("Starting express");
})

