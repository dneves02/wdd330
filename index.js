const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    request(
      { url: 'https://www.edamam.com/'},
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
    res.render("home")
  })
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  

function getUser(){
    return "Davi";
}