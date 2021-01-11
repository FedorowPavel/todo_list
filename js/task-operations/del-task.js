//функция удаления элемента из списка дел при нажатии на кнопку delBtn
function delTask(event) {
    //получаем свойство парентнод объекта ивент.таргер.паретнтноде
    const { parentNode } = event.target.parentNode;
    parentNode.remove();
}

export default delTask;