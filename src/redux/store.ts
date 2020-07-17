import {CombinedState, combineReducers, createStore, Reducer} from "redux";
import noteReducer from "./reducers/noteReducer";
import todoReducer from "./reducers/todoReducer";
import uiReducer from "./reducers/uiReducer";
import LocalStorageService from "../services/LocalStorageService";
import {IRootState} from "./interfaces/IRootState";


const rootReducer: any = combineReducers(
    {
        uiState: uiReducer,
        notes: noteReducer,
        todos: todoReducer
    }
);

const initialState: IRootState = {
    uiState: {
        previousRoute: '',
        headerTitle: ''
    },
    todos: LocalStorageService.get('todos') ?? [],
    notes: LocalStorageService.get('notes') ?? []
};

const store = createStore(
    rootReducer,
    initialState
);

store.subscribe(() => {
    LocalStorageService.set('notes', store.getState().notes);
    LocalStorageService.set('todos', store.getState().todos);
});

export default store;

