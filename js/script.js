import listsTemplate from './templates/pages/lists/index.js';
import { generateId } from './utils.js';
import listsList from './lists-list.js'

const currentUrl = window.location.pathname;
const rootDiv = document.querySelector('.container');

if (currentUrl === '/') {
    rootDiv.innerHTML = listsTemplate;

    const addListForm = document.querySelector('.add-form > form');
    addListForm.addEventListener('submit', (event) => {
        event.preventDefault();

        //получаем все значения полей формы
        const formData = new FormData(event.target);

        const listName = formData.get('name');



        const newList = {
            id: generateId(listsList.lists),
            name: listName
        };

        listsList.add(newList);
        //сюда дописать функионал добалвения (как в эдд таск)
    })
}


//сделать чтобы список генерировался из локал сторадж
//и работало добавление

