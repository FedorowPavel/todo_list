function deleteCheckedTasks() {
    const checkedTasks = document.querySelectorAll('li.checked');
    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

    checkedTasks.forEach((checkedTask) => {
        checkedTask.remove();
    })

    deleteCheckedBtn.setAttribute('disabled', "true")
}

export default deleteCheckedTasks;