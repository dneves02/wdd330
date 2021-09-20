const links = [
   {
     label: "Week01",
     url: "./week01/hello.html"
   },
   {
      label: "Week02",
      url: "./week02/week2.html"
   }
]
function get_index(theButtonClicked){
   var index = $("#index");
   var arrayLength = links.length;
   // document.getElementById("index").innerHTML = '<li><a href="./Week01/hello.html"><div class="button">Week 01<br/></div></a></li>';
   if (arrayLength > 0){
      for (var i = 0; i < arrayLength; i++){
         var label = links[i].label;
         var url = links[i].url;
         
         index.append('<li><a href="'+ url +'"><div class="button">'+ label +'<br/></div></a>');
         index.append('<br/></li>')
      }
      
   }   

}