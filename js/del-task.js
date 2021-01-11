//функция удаления элемента из списка дел при нажатии на кнопку delBtn
function delTask(event) {
    event.target.parentNode.parentNode.remove();
    return
}

export default delTask;