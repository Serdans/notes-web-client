import {ITodo} from "../../interfaces/ITodo";
import {INote} from "../../interfaces/INote";
import {IUIState} from "./IUIState";
import {ISeries} from "../../interfaces/ISeries";

export interface IRootState {
    encryptionKey?: string;
    todos: Array<ITodo>;
    notes: Array<INote>;
    series: Array<ISeries>;
    uiState: IUIState;
}
