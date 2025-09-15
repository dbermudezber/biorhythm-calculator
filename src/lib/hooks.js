import {useState} from 'react';

export function useStoredState(storageKey, defaultState) {
    function getInitalState() {
        const storedState = localStorage.getItem(storageKey);
        return storedState ?? defaultState;
    }
    const [state, setState] = useState(getInitalState);
    function setAndStoreState(state) {
        setState(state);
        localStorage.setItem(storageKey, state);
    }
    return [state, setAndStoreState];
}