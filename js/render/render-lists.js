import listsTemplate from '../templates/pages/lists/index.js';
import addList, { createList } from '../list-operations/add-list.js';
import listsList from '../lists-list.js';

function renderLists() {
    const rootDiv = document.querySelector('.container');
    //если адресная строка после домена пуста то
    //создаем первый экран со списками списками в контейнере
    rootDiv.innerHTML = listsTemplate;

    const addListForm = document.querySelector('.add-form > form');

    //вешаем обработчик событий на форму добавления
    addListForm.addEventListener('submit', addList);





    listsList.lists.forEach(list => {
        createList(list);
    });
}

export default renderLists;