import {Action} from "redux";

export interface IAction<T, P> extends Action<T> {
    type: T;
    payload: P;
}
