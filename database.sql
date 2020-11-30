CREATE DATABASE mymenuapp;

CREATE TABLE recipes
(
   id SERIAL PRIMARY KEY NOT NULL,
   recipe_name VARCHAR (100) NOT NULL,
   igredients VARCHAR (300) NOT NULL,
   instructions VARCHAR (1000) NOT NULL,
   servings INT NOT NULL
);

INSERT INTO recipes(recipe_name, igredients, instructions, servings) 
VALUES ('Fried Chicked', 'chicken, flour, eggs, bread crums, oil, seasonings', 'cut chicken into small pieces, season, pass into eggs, flour and bread crums. Deep fry it. Enjoy!','12');
INSERT INTO recipes(recipe_name, igredients, instructions, servings) 
VALUES ('Lasagna', 'groundbeef, sauce, pasta, olive oil, seasonings', 'Prepare, bake. Enjoy!','6');

CREATE USER dneves WITH PASSWORD 'mymenu123';
GRANT SELECT, INSERT, UPDATE, DELETE ON recipes TO dneves;
GRANT USAGE, SELECT ON SEQUENCE recipes_id_seq TO dneves;

CREATE TABLE cookbook
(
   id SERIAL PRIMARY KEY NOT NULL,
   recipe_name VARCHAR (100) NOT NULL,
)