// crear variables input, boton, container guardadas

const task = document.getElementById("newTask");
const btn = document.getElementById("btn-add");
const savedTasks = document.getElementById("toDoTasks");

// al hacer click en boton, ejecuta funcion

btn.addEventListener("click", function () {
  // crea new elem p/guardar tarea. Utiliza var:
  var newTask = document.createElement("p");

  // crea class para new element --> add
    newTask.classList.add("tareasGuardadas");

  // contenido new elem = valor de input
    newTask.innerText = task.value;
    
  // container guardado (div )absorbe new elem
  toDoTasks.appendChild(newTask);
})