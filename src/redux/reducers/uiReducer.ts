import {IUIState} from "../interfaces/IUIState";
import {IUIAction} from "../interfaces/IUIAction";
import {UIAction} from "../enums/UIAction";
import {defaultUIState} from "../initialState";

const uiReducer = (state: IUIState, action: IUIAction): IUIState => {

    if (!state) {
        return defaultUIState;
    }

    switch (action.type) {
        case UIAction.SET_HEADER_TITLE:
            return {
                ...state,
                headerTitle: action.payload.headerTitle ?? ''
            };
        case UIAction.SET_PREVIOUS_ROUTE:
            return {
                ...state,
                previousRoute: action.payload.previousRoute ?? ''
            };
        default:
            return state;
    }
};

export default uiReducer;
