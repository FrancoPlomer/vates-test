
const prefix = () => sessionStorage.getItem('userID') || '';

const purgeExpiredEntry = key => {
    let value = localStorage.getItem(key);
    if(value) {
        const item = JSON.parse(value);
        const now = new Date();
        if(now.getTime() > item.expiry) {
            storageHandler.remove(key);
            return null;
        }
        return item;
    }
}

export const storageHandler = {
    get: key => {
        const wrapKey = `${prefix()}${key.id}`;
        const item = purgeExpiredEntry(wrapKey);
        return item != null ? item.value : null;
    },
    set: (key, value) => {
        try {
            const now = new Date();
            const item = {
                value,
                expiry: now.getTime() + key.expirationTime,
            };
            localStorage.setItem(`${prefix()}${key.id}`, JSON.stringify(item));
        } catch (error) {
            throw new Error (error);
        }
    },
};
