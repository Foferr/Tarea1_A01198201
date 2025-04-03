//  HashTable
class HashTable {
    constructor() {
        this.table = new Map();
    }

    set(key, value) {
        this.table.set(key, value);
    }

    get(key) {
        return this.table.get(key);
    }

    has(key) {
        return this.table.has(key);
    }

    remove(key) {
        return this.table.delete(key);
    }

    keys() {
        return Array.from(this.table.keys());
    }

    values() {
        return Array.from(this.table.values());
    }

    entries() {
        return Array.from(this.table.entries());
    }

    clear() {
        this.table.clear();
    }

    size() {
        return this.table.size;
    }
}

module.exports = HashTable;
