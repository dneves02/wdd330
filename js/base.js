const links = [
   {
     label: "Week01",
     url: "./week01/hello.html"
   }
]
function get_index(theButtonClicked){
   document.getElementById("index").innerHTML = '<li><a href="./Week01/hello.html"><div class="button">Week 01<br/></div></a></li><li><a href="./Week02/week2.html"><div class="button">Week 02<br /></div></a></li>'
        theButtonClicked.innerHTML = "My Assignments";
}