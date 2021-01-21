import listsTemplate from './templates/pages/lists/index.js';
import template from './templates/pages/list/index.js';
import { generateId } from './utils.js';
import listsList from './lists-list.js';
import checkList from './list-operations/check-list.js';
import delList from './list-operations/del-list.js';
import storageService from './storage-service.js';
import deleteCheckedLists from "./list-operations/delete-cheched-lists.js";
import editList from './list-operations/edit-list.js';
import animateBorder from './input_border.js';
import addTask, { createTask } from './task-operations/add-task.js';
import deleteCheckedTasks from "./task-operations/delete-checked-tasks.js";
import taskList from './tasks.js';

import addList, { createList } from './list-operations/add-list.js';

//находим форму добавления
// const addForm = document.querySelector(".add-form");

const currentUrl = window.location.pathname;
const rootDiv = document.querySelector('.container');

function renderLists() {
    //если адресная строка после домена пуста то
    //создаем первый экран со списками списками в контейнере
    rootDiv.innerHTML = listsTemplate;

    const addListForm = document.querySelector('.add-form > form');

    //вешаем обработчик событий на форму добавления
    addListForm.addEventListener('submit', addList)

    listsList.lists.forEach(list => {
        createList(list);
    });
}


if (currentUrl === '/') {
    renderLists()
}

export function renderList() {
    rootDiv.innerHTML = template;

    //находим форму добавления
    const addForm = document.querySelector(".add-form");

    //вешаем обработчик события сабмит(отправку) на форму
    addForm.addEventListener("submit", addTask);


    taskList.tasks.forEach(task => {
        createTask(task);
    });
}


if (currentUrl === '/list/1') {
    renderList();
}


//находим кнопку удаления отмеченых
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
//вешаем на нее обработчик событий
deleteCheckedBtn.addEventListener('click', deleteCheckedLists);

window.addEventListener('popstate', () => {
    if (window.location.pathname === "/list/1") {
        renderList();
    }

    if (window.location.pathname === "/") {
        renderLists()
    }
});


window.addEventListener('click', animateBorder);

