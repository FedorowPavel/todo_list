import listsList from '../lists-list.js';
import storageService from '../storage-service.js'

//функция удаления элемента из списка дел при нажатии на кнопку delBtn
function delList(event) {
    //получаем свойство парентнод объекта ивент.таргер.паретнтноде
    const { parentNode } = event.target.parentNode;

    //удаляем из массива
    const listId = parseInt(parentNode.id);
    listsList.delete(listId);

    parentNode.remove();

    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
    if (document.querySelectorAll('li.checked').length === 0) {
        deleteCheckedBtn.setAttribute('disabled', "true")
    }

    storageService.set('lists', JSON.stringify(listsList.lists));
}

export default delList;
