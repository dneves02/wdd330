function search() {
    // Get the value from the search box
    var searchString = $('#txtSearch').val();
    console.log('Searching for: ' + searchString);
 
    // Set up the parameters to send to the API
    var params = { q: searchString, app_id: '661c2e42', app_key: 'f2af3a7c771087f4a37bfadb93a34d97' };
 
   // Use jQuery to make the get request
    $.get('https://api.edamam.com/search', params, function(data, status) {
      // For debugging purposes, make a note that we're back
      console.log('Back from server with the following results:');
      console.log(status);
      console.log(data);
 
      updateResultList(data);
    });
 }
 
function updateResultList(data) {
  if (data.hits && data.hits.length > 0) {
    var resultList = $('#ulResults');
    resultList.empty();
     
    // For loop to Iterate thru the results...
    for (var i = 0; i < data.hits.length; i++) {
      var title = data.hits[i].recipe.label;
      var url = data.hits[i].recipe.url;
      var image = data.hits[i].recipe.image;
      resultList.append('<li style="list-style-type: none;"><a href="'+ url +'"><img class="title_image" src="'+ image +'"><h3>' + title + '</h3></a>');
      
      //resultList.append('<h3><a href="'+ url +'">' + title + '</a></h3>');
      resultList.append('<ul>')
      for (var j = 0; j < data.hits[i].recipe.ingredients.length; j++) {
        var ingredient = data.hits[i].recipe.ingredients[j];
        resultList.append('<li><p>' + ingredient.text + '</p></li>');
        
      } 
      resultList.append('</ul></li>')
     }
   }
 }

//styles and js animation 
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


 //$('ul li:nth-child(1)').css('list-style-type','none');

 //$('ul li').css('list-style-type','none');