import addTask, { createTask } from './task-operations/add-task.js';
import deleteCheckedTasks from "./task-operations/delete-checked-tasks.js";
// import checkTask from './task-operations/check-task.js';
// import delTask from './task-operations/del-task.js';
// import editTask from "./task-operations/edit-task.js";
import taskList from './tasks.js'


//находим форму добавления
const addForm = document.querySelector(".add-form");

//вешаем обработчик события сабмит(отправку) на форму
addForm.addEventListener("submit", addTask);

//находим кнопку удаления отмеченых
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
//вешаем на нее обработчик событий
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks)



taskList.tasks.forEach(task => {
    createTask(task);
})


//дописать методы на
//cltkfnm


