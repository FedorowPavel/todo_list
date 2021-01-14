import taskList from '../tasks.js';

//функция удаления элемента из списка дел при нажатии на кнопку delBtn
function delTask(event) {
    //получаем свойство парентнод объекта ивент.таргер.паретнтноде
    const { parentNode } = event.target.parentNode;

    //удаляем из массива
    const taskId = parseInt(parentNode.id);
    taskList.delete(taskId);


    parentNode.remove();



    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
    if (document.querySelectorAll('li.checked').length === 0) {
        deleteCheckedBtn.setAttribute('disabled', "true")
    }

    localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}

export default delTask;