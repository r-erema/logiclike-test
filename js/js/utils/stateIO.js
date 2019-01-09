export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        return serializedState === null ? {contacts: []} : JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

export const saveState = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
};