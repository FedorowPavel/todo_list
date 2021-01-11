import addTask from './task-operations/add-task.js';

//находим форму добавления
const addForm = document.querySelector(".add-form");

//вешаем обработчик события сабмит(отправку) на форму
addForm.addEventListener("submit", addTask);


