import renderTasks from './render-tasks.js';
import addTask from '../task-operations/add-task.js';
import template from '../templates/pages/list/index.js';
import taskList from '../tasks.js';
import { getId } from '../utils.js';


export function addDragAndDrop() {
    const listItems = document.querySelectorAll('li');

    let dragging;
    let draggingOver;

    listItems.forEach((listItem) => {
        listItem.setAttribute('draggable', true);

        listItem.addEventListener('drag', (event) => {
            dragging = event.target;
        });

        listItem.addEventListener('dragover', (event) => {
            event.preventDefault();
            draggingOver = event.target.closest('li');
        });


        listItem.addEventListener('drop', () => {
            taskList.swap(getId(dragging), getId(draggingOver));

            renderTasks();
        })
    })


}


function renderList() {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = template;

    //находим форму добавления
    const addForm = document.querySelector(".add-form");

    //вешаем обработчик события сабмит(отправку) на форму
    addForm.addEventListener("submit", addTask);

    renderTasks();
}

export default renderList;