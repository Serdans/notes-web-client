import {IRootState} from "../interfaces/IRootState";
import {INote} from "../../interfaces/INote";
import sortByStringDate from "../../utils/sortByStringDate";

export const getAllNotes = (state: IRootState): Array<INote> =>
    state.notes.sort(sortByStringDate);


export const getNoteById = (state: IRootState, id: string): INote =>
    state.notes.find((n) => n.id === id) || {
        id: '',
        title: '',
        description: '',
        updatedAt: ''
    };

