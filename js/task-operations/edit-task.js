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

    if (span) {
        const { textContent: text } = span;

        const input = document.createElement('input');
        input.setAttribute('value', text);
        input.setAttribute('type', "text");

        li.replaceChild(input, span);

        return;
    }


    const input = li.querySelector('input[type="text"]');
    const { value: newText } = input;

    const newSpan = document.createElement('span');
    newSpan.textContent = newText;

    li.replaceChild(newSpan, input);


}

export default editTask;