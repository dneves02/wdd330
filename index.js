const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://dneves:mymenu123@localhost:5432/mymenuapp';
const pool = new Pool({connectionString: connectionString});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res) {
    console.log('Hello Davi! Going to your home page');
    res.render("home")
  })
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  })
  .get('/myrecipes', function(req,res){
    res.render("myrecipes")
  })

  .get('/search', (req, res) => {
    request(
      { url: 'https://api.edamam.com/'},
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function getRecipes(req, res) {
    console.log('Hello, getting your recipes your from cookbook');
    
    var id = req.query.id;
    console.log('Retriving recipe #' , id);
    
    getRecipeFromDb(id, function(error, result){
      console.log('Back from the getRecipeFromDB with result: ', result);
      res.json(result);
    }) 
  }

function getRecipeFromDb(id, callback){

  var sql = "SELECT * FROM recipes WHERE id = $1::int";
  var params = [id];

  pool.query(sql, params, function(err, result){
    if(err) {
      console.log("error with database: ", err)
      callback(err, null)
    }
    console.log("Found DB result: " + JSON.stringify(result.rows))

    callback(null, result.rows)
  })
}
