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
    //получаем кнопку delBtn
    const delBtn = event.target.parentNode.querySelector('button');

    if (event.target.checked) {
        //меняем стили
        li.classList.add('checked');
        delBtn.classList.add('checked');
        return

    } else {
        li.classList.remove('checked');
        delBtn.classList.remove('checked');
        return
    }

}

//функция удаления элемента из списка дел при нажатии на кнопку delBtn
function delTask(event) {
    event.target.parentNode.parentNode.remove();
    return
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
    newTodo.innerHTML = `<input type="checkbox" id=${tasks.length - 1}> <span>${todoText}</span>  <button class="delete-btn" id=${tasks.length - 1}btn><i class="far fa-trash-alt"></i></button>`;

    //записываем каждый чекбокс
    const checkbox = document.getElementById(`${tasks.length - 1}`);
    //записываем каждую кнопку удаления
    const delBtn = document.getElementById(`${tasks.length - 1}btn`);

    //при изменении состояни чекбокса выполняем функцию
    checkbox.addEventListener('change', checkTask)
    //при нажатии на кнопку удалить выполняем функцию
    delBtn.addEventListener('click', delTask)


    //очистим поле ввода формы
    event.target.reset();
    return

});




//добавить анимацию на фокус для нижней границы инпута !!!
//добавить функционал удаления дела!!!
//добавить имя списка !!!
//застилизовать элементы списка!!!

