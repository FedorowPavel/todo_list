import checkTask from './check-task.js';
import delTask from './del-task.js';
import editTask from "./edit-task.js";

//находим список дел
const todoList = document.querySelector('.todo-list ol');

//список для дел
let tasks = [];

function addTask(event) {

    //сброс стандартного поведения формы
    event.preventDefault();

    //получаем все значения полей формы
    const formData = new FormData(event.target);

    //получаем текст из инпута формы
    const todoText = formData.get("text");

    //если поле пустое ничего не добавляем
    if (!todoText) {
        return;
    }

    //создаем объект для хранения текста инпута и состояния чекбокса
    const newTask = {
        text: todoText,
        checked: false,
    }

    //добавляем обект в массив заданий
    tasks = [...tasks, newTask];

    //создаем элемент списка
    const newTodo = document.createElement('li');

    //добавляем элемент списка в конец списка заданий
    todoList.appendChild(newTodo);

    //добавляем в элемент списка штмл с текстом инпута и тд
    newTodo.innerHTML = `
    <input type="checkbox" id=${tasks.length - 1}> 
    <span>${todoText}</span>  
    <button class="edit-btn" id=${tasks.length - 1}edit><i class="far fa-edit"></i></button>
    <button class="delete-btn" id=${tasks.length - 1}del><i class="far fa-trash-alt"></i></button>
    `;

    //записываем каждый чекбокс
    const checkbox = document.getElementById(`${tasks.length - 1}`);
    //записываем каждую кнопку удаления
    const delBtn = document.getElementById(`${tasks.length - 1}del`);

    const editBtn = document.getElementById(`${tasks.length - 1}edit`);

    //при изменении состояни чекбокса выполняем функцию
    checkbox.addEventListener('change', checkTask)
    //при нажатии на кнопку удалить выполняем функцию
    delBtn.addEventListener('click', delTask)

    editBtn.addEventListener('click', editTask)


    //очистим поле ввода формы
    event.target.reset();
    return

}

export default addTask;