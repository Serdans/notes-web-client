import {IAction} from "./IAction";
import {NoteAction} from "../enums/NoteAction";
import {INote} from "../../interfaces/INote";

export interface INoteAction extends IAction<NoteAction, Partial<INote>> {

}
