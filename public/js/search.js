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
     
     // you could use a forEach here as well...
     for (var i = 0; i < data.hits.length; i++) {
       var title = data.hits[i].recipe.label;
       var url = data.hits[i].recipe.url;
       resultList.append('<li><p>' + title + '</p></li>');
       resultList.append('<li><a href="<%= url %>">' + url + '</a></li>');
     }
   }
 }