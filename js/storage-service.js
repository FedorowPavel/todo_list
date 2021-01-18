class StorageService {
    set(key, value) {
        sessionStorage.setItem(key, value)
    }

    get(key) {
        return sessionStorage.getItem(key);
    }
}

export default new StorageService();