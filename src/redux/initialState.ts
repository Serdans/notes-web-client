import {IRootState} from "./interfaces/IRootState";
import {IUIState} from "./interfaces/IUIState";

export const defaultUIState: IUIState = {
    headerTitle: 'Notes',
    previousRoute: ''
};

const initialState: IRootState = {
    uiState: defaultUIState,
    notes: [],
    todos: [],
    series: [],
};

export default initialState;
