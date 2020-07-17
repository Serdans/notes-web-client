import {ITodo} from "../../interfaces/ITodo";
import {INote} from "../../interfaces/INote";
import {IUIState} from "./IUIState";

export interface IRootState {
    encryptionKey?: string;
    todos: Array<ITodo>;
    notes: Array<INote>;
    uiState: IUIState;
}
