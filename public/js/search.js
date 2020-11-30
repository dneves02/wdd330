function search() {
   // Get the value from the search box
   var searchString = $('#txtSearch').val();
   console.log('Searching for: ' + searchString);
 
   // Set up the parameters to send to the API
   var params = { s: searchString, app_id: '661c2e42', app_key: 'f2af3a7c771087f4a37bfadb93a34d97' };
 
   // Use jQuery to make the get request
   $.get('https://www.edamam.com/', params, function(data, status) {
     // For debugging purposes, make a note that we're back
     console.log('Back from server with the following results:');
     console.log(status);
     console.log(data);
 
     updateResultList(data);
   });
 }
 
 function updateResultList(data) {
   if (data.Search && data.Search.length > 0) {
     var resultList = $('#ulResults');
     resultList.empty();
     
     // you could use a forEach here as well...
     for (var i = 0; i < data.Search.length; i++) {
       var title = data.Search[i].Title;
       resultList.append('<li><p>' + title + '</p></li>');
     }
   }
 }