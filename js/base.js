
function get_index(theButtonClicked){
   var links = [
      {
        label: "Week01",
        url: "./week01/hello.html"
      },
      {
         label: "Week02",
         url: "./week02/week2.html"
      }
   ]
   var arrayLength = links.length;
   for (var i in links){
      document.getElementById("index").innerHTML = '<li><a href='+links[i].url+'><div class="button">'+links[i].label+'<br/></div></a></li>';
      theButtonClicked.innerHTML = "My Assignments";
   }
}