import {IUIAction} from "../interfaces/IUIAction";
import {UIAction} from "../enums/UIAction";

export const setHeaderTitle = (title: string): IUIAction => ({
    type: UIAction.SET_HEADER_TITLE,
    payload: {
        headerTitle: title
    }
});

export const setPreviousRoute = (route: string): IUIAction => ({
    type: UIAction.SET_PREVIOUS_ROUTE,
    payload: {
        previousRoute: route
    }
});

export const setPinnedHomeRoute = (route: string): IUIAction => ({
    type: UIAction.SET_PINNED_HOME_ROUTE,
    payload: {
        pinnedHomeRoute: route
    }
});
