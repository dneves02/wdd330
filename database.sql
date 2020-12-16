CREATE DATABASE mymenuapp;

CREATE TABLE recipes
(
   id SERIAL PRIMARY KEY NOT NULL,
   recipe_name VARCHAR (100) NOT NULL,
   igredients VARCHAR (1000) NOT NULL,
   recipe_url VARCHAR (1000) NOT NULL,
   image_url VARCHAR (1000) NOT NULL
);

INSERT INTO recipes(recipe_name, igredients, recipe_url, image_url) 
VALUES ('Fish And Chips', '4 medium potatoes I used a mix of yukon gold and russet

4 medium fish fillets cod, haddock and albacore work well

4 medium fish fillets cod, haddock and albacore work well

4 medium fish fillets cod, haddock and albacore work well

1/2 cup + 2 tablespoons flour

1/2 cup + 2 tablespoons flour

2 tablespoons cornstarch

1/4 teaspoon paprika

1/4 teaspoon onion powder

vegetable oil for frying

1/4 teaspoon baking powder

1/2 cup very cold beer you may need a little more', 

'https://norecipes.com/fish-and-chips-recipe/',

'https://www.edamam.com/web-img/e2a/e2a26f70fb6440b093ba5afb1560772b.jpg');

INSERT INTO recipes(recipe_name, igredients, recipe_url, image_url) 
VALUES ('Pork Quesadillas', '1 cup reserved roasted vegetables (from pork chops with fennel and carrots), coarsely chopped

1 tablespoon chopped pickled jalapenos

4 large flour tortillas

2 reserved cooked pork chops (from pork chops with fennel and carrots)

3 1/2 ounces monterey jack cheese, grated (1 cup)', 'https://www.marthastewart.com/862754/pork-quesadillas','https://www.edamam.com/web-img/310/3109aa67eaebff453982004a29ae61f5.jpg');


INSERT INTO recipes(recipe_name, igredients, recipe_url, image_url) 
VALUES ('Lasagna', '1 pound lasagna noodles or packaged precooked lasagna noodles,
coarse salt, 5 links sweet Italian sausage, or a mixture of hot and sweet, pierced with a fork,
1 large egg, 1 pound ricotta cheese, 3/4 cup freshly grated pecorino Romano or Parmesan cheese, plus more for serving,
5 cups Basic Italian Tomato Sauce, 1 pound fresh or prepackaged mozzarella cheese, cut crosswise into 1/3-inch-thick slices, 
extra-virgin olive oil', 'https://www.marthastewart.com/343399/lasagna','https://www.edamam.com/web-img/f3d/f3dcfc432c9a3ca66671ae7615331417');



CREATE USER dneves WITH PASSWORD 'mymenu123';
GRANT SELECT, INSERT, UPDATE, DELETE ON recipes TO dneves;
GRANT USAGE, SELECT ON SEQUENCE recipes_id_seq TO dneves;

CREATE TABLE cookbook
(
   id SERIAL PRIMARY KEY NOT NULL,
   recipe_name VARCHAR (100) NOT NULL,
   recipe_id FOREIGN KEY NOT NULL  
)