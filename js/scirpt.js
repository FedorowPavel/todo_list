//находим форму добавления
const addForm = document.querySelector(".add-form");
//находим список дел
const todoList = document.querySelector('.todo-list ol');

//список для дел
let tasks = [];

//функция для смены стилей отдельного дела при выборе (когда сделано)
function checkTask(event) {
    //получаем наш li соответствующий чекбоксу
    const li = event.target.parentNode;

    if (event.target.checked) {
        //меняем стиили
        li.classList.add('checked');
    } else {
        li.classList.remove('checked');
    }
}



//вешаем обработчик события сабмит(отправку) на форму
addForm.addEventListener("submit", (event) => {

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

    const newTask = {
        text: todoText,
        checked: false,
    }

    tasks = [...tasks, newTask];


    const newTodo = document.createElement('li');

    todoList.appendChild(newTodo);

    newTodo.innerHTML = `<input type="checkbox" id=${tasks.length - 1}> <span>${todoText}</span>  <button class="delete-btn"><i class="far fa-trash-alt"></i></button>`;

    const checkbox = document.getElementById(`${tasks.length - 1}`);

    checkbox.addEventListener('change', checkTask)


    //очистим поле ввода формы
    event.target.reset();

});


//добавить анимацию на фокус для нижней границы инпута
//добавить функционал удаления дела
//добавить имя списка
//застилизовать элементы списка

