const todos = JSON.parse(localStorage.getItem("todos")) || [];
const ul = document.getElementById("ul");

function displayTasks() {
    ul.innerHTML = "";
    todos.forEach(task => {
        const li = document.createElement("li");
        li.innerText = task;
        const fBtn = document.createElement("button");
        fBtn.textContent = "Mark Finished";
        fBtn.onmouseover = () => fBtn.style.backgroundColor = "hsl(39, 100%, 70%)";
        fBtn.onmouseout = () => fBtn.style.backgroundColor = "orange";
        fBtn.on
        fBtn.onclick = () => {
            const idx = todos.indexOf(task);
            todos.splice(idx, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
            displayTasks();
        };
        fBtn.style.backgroundColor = "orange";
        ul.append(li);
        li.append(fBtn);
    })
}

function addTask() {
    const input = document.getElementById("input").value;
    if (input === "") return;
    document.getElementById("input").value = "";
    todos.push(input);
    localStorage.setItem("todos", JSON.stringify(todos));

    displayTasks();
}

function removeTasks() {
    todos.length = 0;
    localStorage.removeItem("todos");

    displayTasks();
}

displayTasks();