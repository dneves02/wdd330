const links = [
   {
     label: "Week01",
     url: "./week01/hello.html"
   },
   {
      label: "Week02",
      url: "./week02/week2.html"
   },
   {
      label: "Week03",
      url: "./week03/week3.html"
   },
   {
      label: "Week04",
      url: "./week04/week4.html"
   },
   {
      label: "Week05",
      url: "./week05/week5.html"
   },
   {
      label: "Week06",
      url: "./week06/week06.html"
   },
   {
      label: "Week07",
      url: "./week07/week7.html"
   },
   {
      label: "Week08",
      url: "./week08/week8.html"
   },
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