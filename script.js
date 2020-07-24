// Define UI element
var button = document.getElementById("add");
var userinput = document.getElementById("userinput");
var ul = document.querySelector("ul");
var todoList = document.querySelector(".todoList");

// Load all event listener
button.addEventListener("click", addListClick);
userinput.addEventListener("keypress",addListKeypress);
ul.addEventListener('click', toggleDone); 
todoList.addEventListener("click", deleteTodo);

// Add ToDo item:
// Get userinput length
function userinputLength(){
    return userinput.value.length;
}

// Create new todo item
function createList(){
    var li = document.createElement("li");

    // Add user input value
    li.appendChild(document.createTextNode(userinput.value));

    // Add gap between 
    li.insertAdjacentHTML("beforeend", "&nbsp;");

    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.className = "remove";
    deleteButton.innerHTML = 'Delete';
    li.appendChild(deleteButton);
    
    ul.appendChild(li);
    userinput.value = "";
}

// Add new todo item click
function addListClick(){
    if (userinputLength() > 0) {
        createList();
    }
}

// Add new todo item keypress
function addListKeypress(event){
    if (userinputLength() > 0 && event.keyCode === 13) {
        createList();
    }
}

// Add ".done" (strike) toggle when clicking on selected todo item  
function toggleDone(event){
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
  }
}

// Delete selected todo item 
function deleteTodo(e){
  if(e.target.classList.contains('remove')){ 
    e.target.parentElement.remove();
  }
}