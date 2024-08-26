const NOTES_KEY = 'notes_key';

const getData = () => {
    if (checkStorage()) {
        const serializedData = localStorage.getItem(NOTES_KEY);
        return JSON.parse(serializedData);
    }
    return null
}

const saveData = (data) => {
    if (checkStorage()) {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(NOTES_KEY, serializedData);
        return 'Data Saved';
    }
    return null
}

const checkStorage = () => {
    if (typeof Storage) {
        return true;
    }
    console.log('Your browser didnt support Web Storage');
    return false
}

export { getData, saveData };