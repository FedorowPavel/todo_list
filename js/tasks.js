import storageService from './storage-service.js'

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

    deleteTaskByList(listId) {
        taskList.tasks = taskList.tasks.filter((task) => task.parentListId !== listId);
    }

    check(id) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return { ...task, checked: !task.checked }
            }
            return task;
        })

    }

    edit(text, id) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: text };
            }
            return task;
        })
    }

    swap(firstId, secondId) {
        let firstIndex = this.tasks.findIndex(task => task.id === firstId);
        let secondIndex = this.tasks.findIndex(task => task.id === secondId);

        if (firstIndex > secondIndex) {
            const temp = firstIndex;
            firstIndex = secondIndex;
            secondIndex = temp;
        }

        if (firstIndex === secondIndex) {
            return;
        }

        this.tasks = this.tasks
            .slice(0, firstIndex)
            .concat(
                this.tasks[secondIndex],
                this.tasks.slice(firstIndex + 1, secondIndex),
                this.tasks[firstIndex],
                this.tasks.slice(secondIndex +1)
            )

    }
}

const tasks = JSON.parse(storageService.get('tasks'))

const taskList = new TaskList(tasks ? tasks : []); // =[]

export default taskList;