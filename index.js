const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res) {
    console.log('Hello Davi! Going to your home page');
    var name = getUser();
    var emailAddess = "dneves@zeeksgeeks.com";
  
    var params= {username: name, email: emailAddess};
    res.render("home", params)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


function getUser(){
    return "Davi";
}

