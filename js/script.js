import listsTemplate from './templates/pages/lists/index.js';
import { generateId } from './utils.js';
import listsList from './lists-list.js';
import checkList from './list-operations/check-list.js';
import delList from './list-operations/del-list.js';
import storageService from './storage-service.js';
import deleteCheckedLists from "./list-operations/delete-cheched-lists.js";
import editList from './list-operations/edit-list.js';
import animateBorder from './input_border.js'

import addList, { createList } from './list-operations/add-list.js';

//находим форму добавления
// const addForm = document.querySelector(".add-form");

const currentUrl = window.location.pathname;
const rootDiv = document.querySelector('.container');
if (currentUrl === '/') {
    //если адресная строка после домена пуста то
    //создаем первый экран со списками списками в контейнере
    rootDiv.innerHTML = listsTemplate;
}

const addListForm = document.querySelector('.add-form > form');

//вешаем обработчик событий на форму добавления
addListForm.addEventListener('submit', addList)

//находим кнопку удаления отмеченых
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
//вешаем на нее обработчик событий
deleteCheckedBtn.addEventListener('click', deleteCheckedLists);

listsList.lists.forEach(list => {
    createList(list);
});


// const inputField = document.querySelector('input[type="text"]');

window.addEventListener('click', animateBorder);


//сделать чтобы список генерировался из локал сторадж
//и работало добавление

