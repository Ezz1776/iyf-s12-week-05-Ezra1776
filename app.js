const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

let todos = [];
let currentFilter = "all";

function renderTodos() {
    todoList.innerHTML = "";
    
    const filteredTodos = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true;
    });

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;
        if (todo.completed) li.classList.add("completed");

        const span = document.createElement("span");
        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    updateStats();
}

function addTodo(text) {
    const newTodo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function updateStats() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`;
}

function filterTodos(filter) {
    currentFilter = filter;
    filters.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    renderTodos();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value;
    if (text.trim() !== "") {
        addTodo(text);
        input.value = "";
    }
});

todoList.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (!li) return;
    
    const id = li.dataset.id;
    if (event.target.classList.contains("delete-btn")) {
        deleteTodo(id);
    } else {
        toggleTodo(id);
    }
});

filters.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const filter = event.target.dataset.filter;
        filterTodos(filter);
    });
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

renderTodos();
