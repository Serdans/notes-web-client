import {combineReducers, createStore} from "redux";
import noteReducer from "./reducers/noteReducer";
import todoReducer from "./reducers/todoReducer";
import uiReducer from "./reducers/uiReducer";
import LocalStorageService from "../services/LocalStorageService";
import {IRootState} from "./interfaces/IRootState";
import seriesReducer from "./reducers/seriesReducer";


const rootReducer: any = combineReducers(
    {
        uiState: uiReducer,
        notes: noteReducer,
        todos: todoReducer,
        series: seriesReducer
    }
);

const initialState: IRootState = {
    uiState: {
        pinnedHomeRoute: LocalStorageService.get('homeRoute') || '/notes',
        previousRoute: '',
        headerTitle: ''
    },
    notes: LocalStorageService.get('notes') ?? [],
    todos: LocalStorageService.get('todos') ?? [],
    series: LocalStorageService.get('series') ?? []
};

const store = createStore(
    rootReducer,
    initialState
);

store.subscribe(() => {
    LocalStorageService.set('homeRoute', store.getState().uiState.pinnedHomeRoute);
    LocalStorageService.set('notes', store.getState().notes);
    LocalStorageService.set('todos', store.getState().todos);
    LocalStorageService.set('series', store.getState().series);
});

export default store;

