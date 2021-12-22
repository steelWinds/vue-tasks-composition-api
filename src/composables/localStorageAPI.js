class LocalStorage {
    static set(key, item) {        
        if (this.has(key)) {
            localStorage.removeItem(key);
        }

        item = JSON.stringify(item);

        localStorage.setItem(key, item);
    }

    static get(key) {
        if ( !(this.has(key)) ) {
            return [];
        }

        let items = localStorage.getItem(key);

        return JSON.parse(items);
    }

    static has(key) {
        if ( !(localStorage.getItem(key)) ) {
            return false;
        }

        return true;
    }
}

export default LocalStorage;
