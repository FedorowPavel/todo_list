import listsList from '../lists-list.js';
import storageService from '../storage-service.js';
import { getTaskId } from '../utils.js';

function deleteCheckedLists() {
    const checkedLists = document.querySelectorAll('li.checked');
    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

    checkedLists.forEach((checkedList) => {
        checkedList.remove();

        const listId = getTaskId(checkedList);
        listsList.delete(listId);
    })


    deleteCheckedBtn.setAttribute('disabled', "true");

    storageService.set('lists', JSON.stringify(listsList.lists));
}

export default deleteCheckedLists;