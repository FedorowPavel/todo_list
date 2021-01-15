class TaskList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    add(newTask) {
        this.tasks = [...this.tasks, newTask];
    }

    delete(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    check(id) {
        this.tasks.forEach((task) => {
            if (task.id === parseInt(id)) {
                task.checked === true ? task.checked = false : task.checked = true
            }
        })
    }

    edit(text, id) {
        this.tasks.forEach((task) => {
            if (task.id === parseInt(id)) {
                task.text = text;
            }
        })
    }
}

const tasks = JSON.parse(localStorage.getItem('tasks'))

const taskList = new TaskList(tasks ? tasks : []); // =[]

export default taskList;