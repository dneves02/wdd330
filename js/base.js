const links = [
   {
      label:"",
      url:""
   },
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

   var arrayLength = links.length;
   document.getElementById("index").innerHTML = '<li><a href="./Week01/hello.html"><div class="button">Week 01<br/></div></a></li>
   theButtonClicked.innerHTML = "My Assignments";
   for (var i = 0; i < arrayLength; i++){
      document.getElementById("index").innerHTML = '<li><a href='+links[i].url+'><div class="button">'+links[i].label+'<br/></div></a></li>';

   }
}