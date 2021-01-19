import listsTemplate from './templates/pages/lists/index.js';
import { generateId } from './utils.js';
import listsList from './lists-list.js';
import checkList from './list-operations/check-list.js';
import delList from './list-operations/del-list.js';
import storageService from './storage-service.js';
import deleteCheckedLists from "./list-operations/delete-cheched-lists.js";
import editList from './list-operations/edit-list.js';

const currentUrl = window.location.pathname;
const rootDiv = document.querySelector('.container');


if (currentUrl === '/') {
    //если адресная строка после домена пуста то
    //создаем первый экран со списками списками в контейнере
    rootDiv.innerHTML = listsTemplate;

    const addListForm = document.querySelector('.add-form > form');

    //вешаем обработчик событий на форму добавления
    addListForm.addEventListener('submit', (event) => {
        //предотвращаем перезагрузку страницы при нажатии на сабмит формы
        event.preventDefault();

        //получаем все значения полей формы
        const formData = new FormData(event.target);

        //переменная для названия формы
        //содержит в себе поле нейм формы
        const listName = formData.get('name');

        //создам объект для отдельного элемента списка
        const newList = {
            id: generateId(listsList.lists),
            name: listName
        };


        //функция добавления нового элемента в список списков
        listsList.add(newList);

        createList(newList);

        //очистим поле ввода формы
        event.target.reset();
        //сюда дописать функионал добалвения (как в эдд таск)
    })
}

//находим сам список
const listofLists = document.querySelector('ol');
// console.log(listofLists)

function createList(list) {
    // console.log(list);

    //создаем ли в ол
    const newListItem = document.createElement('li');
    newListItem.setAttribute('id', `${list.id}`);

    //добавляем новый элемент в список
    listofLists.appendChild(newListItem);

    newListItem.innerHTML = `
    <input type="checkbox" id=${list.id}checkbox> 
    <a>${list.name}</a>
    <button class="edit-btn" id=${list.id}edit><i class="far fa-edit fa-fw"></i></button>
    <button class="delete-btn" id=${list.id}del><i class="far fa-trash-alt fa-fw"></i></button>
    `

    //записываем каждый чекбокс
    const checkbox = document.getElementById(`${list.id}checkbox`);
    //записываем каждую кнопку удаления
    const delBtn = document.getElementById(`${list.id}del`);
    //записываем каждую кнопку редактирования
    const editBtn = document.getElementById(`${list.id}edit`);

    //при изменении состояни чекбокса выполняем функцию
    //то есть вешаем обработчик события, который ждет клика
    checkbox.addEventListener('change', checkList)
    //при нажатии на кнопку удалить выполняем функцию
    delBtn.addEventListener('click', delList)

    editBtn.addEventListener('click', editList)


    storageService.set('lists', JSON.stringify(listsList.lists));
}

//находим кнопку удаления отмеченых
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
//вешаем на нее обработчик событий
deleteCheckedBtn.addEventListener('click', deleteCheckedLists)


//сделать чтобы список генерировался из локал сторадж
//и работало добавление

