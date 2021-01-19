import addTask, { createTask } from './task-operations/add-task.js';
import deleteCheckedTasks from "./task-operations/delete-checked-tasks.js";
import taskList from './tasks.js';
import animateBorder from './input_border.js'


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
});

window.addEventListener('click', animateBorder);







