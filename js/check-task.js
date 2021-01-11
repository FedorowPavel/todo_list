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

export default checkTask;