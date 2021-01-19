import storageService from "./storage-service.js";
// import taskList from "./tasks.js";

class ListsList {
    constructor(lists) {
        this.lists = lists;
    }

    add(newList) {
        this.lists = [...this.lists, newList];
    }

    delete(id) {
        this.lists = this.lists.filter(list => list.id !== id)
    }

    check(id) {
        this.lists = this.lists.map(list => {
            if (list.id === id) {
                return { ...list, checked: !list.checked }
            }
            return list;
        })

    }

    edit(name, id) {
        this.lists = this.lists.map(list => {
            if (list.id === id) {
                return { ...list, name: name };
            }
            return list;
        })
    }
}

const lists = storageService.get('lists')

const listsList = new ListsList(lists || []);

export default listsList;