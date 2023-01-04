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

  // container padre (div )absorbe new elem hijo
  toDoTasks.appendChild(newTask);

  //eliminar value input
  task.value = "";

  //tachar tarea --> var
  newTask.addEventListener("click", function () {
    newTask.style.textDecoration = "line-through";
  });

  // eliminar tarea --> container - hijo

  newTask.addEventListener("dblclick", function () {
    toDoTasks.removeChild(newTask);
  });
    
});
