import {INoteAction} from "../interfaces/INoteAction";
import {NoteAction} from "../enums/NoteAction";
import generateId from "../../utils/generateId";
import moment from "moment";
import {INote} from "../../interfaces/INote";

export const createNote = (title: string, description: string): INoteAction => ({
    type: NoteAction.CREATE_NOTE,
    payload: {
        id: generateId(),
        title,
        description,
        updatedAt: moment().toISOString()
    }
});

export const updateNote = (id: string, note: INote): INoteAction => ({
    type: NoteAction.UPDATE_NOTE,
    payload: {
        ...note,
        id
    }
});

export const deleteNote = (id: string): INoteAction => ({
    type: NoteAction.DELETE_NOTE,
    payload: {
        id
    }
});
