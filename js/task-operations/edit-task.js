function editTask(event) {

    /* находим спан текущего таска
    записываем его содержимое  в переменную
    создаем текстовый инпут с value равным содержимому спана
    и всталвяем его вместо спана
    после повторного нажатия на кнопку едит,
    сохраняем текущее значение инпута
    заменяем инпут на спан с новым значением */

    const li = event.target.closest('li');

    const span = li.querySelector('span');

    //записываем иконки
    const icon = li.querySelector('i');
    //записываем их список классов
    const { classList: iconClass } = icon;
    // const iconClass = icon.classList

    const checkbox = li.querySelector('input[type="checkbox"]')

    if (span) {
        const { textContent: text } = span;

        const input = document.createElement('input');
        input.setAttribute('value', text);
        input.setAttribute('type', "text");


        //заменяем класс иконок
        iconClass.remove('fa-edit');
        iconClass.add('fa-save');

        //устанавливаем атрибут disabel for checkbox
        checkbox.setAttribute("disabled", "true");

        li.replaceChild(input, span);

        return;
    }


    const input = li.querySelector('input[type="text"]');
    const { value: newText } = input;

    //заменяем класс иконок
    iconClass.remove('fa-save');
    iconClass.add('fa-edit');

    //убираем атрибут дизабл
    checkbox.removeAttribute("disabled");


    const newSpan = document.createElement('span');
    newSpan.textContent = newText;

    li.replaceChild(newSpan, input);


}

export default editTask;