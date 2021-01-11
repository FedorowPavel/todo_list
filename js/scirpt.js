import addTask from './task-operations/add-task.js';
import deleteCheckedTasks from "./task-operations/delete-checked-tasks.js";


//находим форму добавления
const addForm = document.querySelector(".add-form");

//вешаем обработчик события сабмит(отправку) на форму
addForm.addEventListener("submit", addTask);

//находим кнопку удаления отмеченых
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
//вешаем на нее обработчик событий
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks)


/* поправить стили
заменить каранандаш в режиме едит
чекбок дизэйбл
*/



