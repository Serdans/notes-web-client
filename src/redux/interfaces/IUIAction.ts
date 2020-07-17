import {IAction} from "./IAction";
import {IUIState} from "./IUIState";
import {UIAction} from "../enums/UIAction";

export interface IUIAction extends IAction<UIAction, Partial<IUIState>> {

}
