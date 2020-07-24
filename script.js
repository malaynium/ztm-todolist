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

// Add Task:
// Get userinput length
function userinputLength(){
    return userinput.value.length;
}

// Create new list
function createList(){
    var li = document.createElement("li");
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

// Add new list click
function addListClick(){
    if (userinputLength() > 0) {
        createList();
    }
}

// Add new list keypress
function addListKeypress(event){
    if (userinputLength() > 0 && event.keyCode === 13) {
        createList();
    }
}

// Add ".done" (strike) toggle when clicking on a list item 
function toggleDone(event){
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
  }
}

// Delete selected todo in the list
function deleteTodo(e){
  if(e.target.classList.contains('remove')){ 
    e.target.parentElement.remove();
  }
}