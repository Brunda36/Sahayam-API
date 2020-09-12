const express = require("express")
const router = express.Router()

router.use(express.static("public"))

router.get("/", (req, res)=>{
   res.render("index", {
      title:"Express Weather Finder"
   })
});

router.get("/:id", (req, res) => {
   res.send("The id is: "+req.params.id)
})

router.put('/', function(req, res){
   res.send('POST route on things.');
});

router.get("/about", (req, res)=>{
   res.send("About page");
});

// router.get("/", (req, res)=>{
//    res.sendFile("index.html", {
//       root: path.join(__dirname, "./public")
//    })
// });

// router.get("/about", (req, res)=>{
//    res.sendFile("about.html", {
//       root: path.join(__dirname, "./public")
//    })
// });

module.exports = router