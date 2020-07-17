import {IRootState} from "./interfaces/IRootState";
import {IUIState} from "./interfaces/IUIState";

export const defaultUIState: IUIState = {
    headerTitle: 'Notes',
    pinnedHomeRoute: '/notes',
    previousRoute: ''
};

const initialState: IRootState = {
    uiState: defaultUIState,
    notes: [],
    todos: [],
    series: [],
};

export default initialState;
