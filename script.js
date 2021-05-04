// selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_btn");
const todoList = document.querySelector(".todo_list")

// event listeners
todoButton.addEventListener('click', addTodo);

// functions
function addTodo(event) {
    event.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = "Hey";
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerText = 'DONE';
    completedButton.classList.add('completed_btn');
    todoDiv.appendChild(completedButton);
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = 'DELETE';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);
    
    todoList.appendChild(todoDiv);
}