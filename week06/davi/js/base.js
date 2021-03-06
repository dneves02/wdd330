var myTasks = []

function addTask(){
   const newTask = document.getElementById("new_task");
   addNewTask(newTask);

}

function addNewTask(task){
   myTasks.push(task);
}

function showtasks() {
   const my_task = document.getElementById("my_tasks");
   my_task.innerHTML = `<td>${myTasks}</td>`;
   //renderHikeList(hikeList, hikeListElement);
 }
 
 function renderHikeList(hikes, parent) {
   hikes.forEach(hike => {
     parent.appendChild(renderOneHike(hike));
   });
 }
 function renderOneHike(hike) {
   const item = document.createElement("li");
 
   item.innerHTML = ` <h2>${hike.name}</h2>
         <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
         <div>
                 <div>
                     <h3>Distance</h3>
                     <p>${hike.distance}</p>
                 </div>
                 <div>
                     <h3>Difficulty</h3>
                     <p>${hike.difficulty}</p>
                 </div>
         </div>`;
 
   return item;
 }