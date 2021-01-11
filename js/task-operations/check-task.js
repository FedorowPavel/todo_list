//функция для смены стилей отдельного дела при выборе (когда сделано)
function checkTask(event) {

    // const target = event.target;
    //понятие деструктуризации
    //полуачем свойство таргерт объекта ивент
    const { target } = event;

    //const li = target.parentNode; идентично
    const { parentNode: li, checked } = target

    //получаем наш li соответствующий чекбоксу
    // const li = target.parentNode;
    //получаем кнопку delBtn
    const delBtn = target.parentNode.querySelector('button');

    if (checked) {
        //меняем стили
        li.classList.add('checked');
        delBtn.classList.add('checked');

    } else {
        li.classList.remove('checked');
        delBtn.classList.remove('checked');
    }
}

export default checkTask;