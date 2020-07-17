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
        case UIAction.SET_PINNED_HOME_ROUTE:
            return {
                ...state,
                pinnedHomeRoute: action.payload.pinnedHomeRoute ?? '/notes'
            };
        default:
            return state;
    }
};

export default uiReducer;
