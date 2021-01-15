import taskList from '../tasks.js';

function deleteCheckedTasks() {
    const checkedTasks = document.querySelectorAll('li.checked');
    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

    checkedTasks.forEach((checkedTask) => {
        checkedTask.remove();

        const taskId = parseInt(checkedTask.id);
        taskList.delete(taskId);
    })


    deleteCheckedBtn.setAttribute('disabled', "true");

    localStorage.setItem('tasks', JSON.stringify(taskList.tasks));

}

export default deleteCheckedTasks;