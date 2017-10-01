import { createStore } from 'redux';

function rootReducer(state = { title: 'Dashboard' }, action) {
    switch (action.type) {
        case 'SET_TITLE':
            const s = { ...state, title: action.payload }
            return s;
        default:
            return state;
    }
}

const store = createStore(rootReducer);
export default store;
