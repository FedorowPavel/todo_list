//функция удаления элемента из списка дел при нажатии на кнопку delBtn
function delTask(event) {
    //получаем свойство парентнод объекта ивент.таргер.паретнтноде
    const { parentNode } = event.target.parentNode;
    parentNode.remove();

    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
    if (document.querySelectorAll('li.checked').length === 0) {
        deleteCheckedBtn.setAttribute('disabled', "true")
    }
}

export default delTask;