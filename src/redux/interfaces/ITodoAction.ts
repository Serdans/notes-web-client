import {IAction} from "./IAction";
import {TodoAction} from "../enums/TodoAction";
import {ITodo} from "../../interfaces/ITodo";

export interface ITodoAction extends IAction<TodoAction, Partial<ITodo>> {

}
