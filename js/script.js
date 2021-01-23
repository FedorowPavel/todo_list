import deleteCheckedLists from "./list-operations/delete-cheched-lists.js";
import animateBorder from './input_border.js';
import renderList from './render/render-list.js';
import renderLists from './render/render-lists.js';


const currentUrl = window.location.pathname;
const rootDiv = document.querySelector('.container');

if (currentUrl === '/') {
    renderLists()
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

