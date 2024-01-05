const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todoInput");


addBtn.addEventListener("click",function(){
    const todoValue = todoInput.value;
    if(todoValue!==""){
        const todoItem = document.createElement("li");
        todoItem.innerText=todoValue;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText ="X";
        

        deleteBtn.classList.add("delete-btn")

        deleteBtn.addEventListener("click",function(){
            todoItem.remove();
        })
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
        todoInput.value="";
    }

})