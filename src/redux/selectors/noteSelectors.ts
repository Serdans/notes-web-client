import {IRootState} from "../interfaces/IRootState";
import {INote} from "../../interfaces/INote";
import moment from "moment";

export const getAllNotes = (state: IRootState): Array<INote> =>
    state.notes.sort((a, b) => {
        if (moment(a.updatedAt) > moment(b.updatedAt)) {
            return 1;
        } else if (moment(a.updatedAt) < moment(b.updatedAt)) {
            return -1;
        }
        return 0;
    });


export const getNoteById = (state: IRootState, id: string): INote =>
    state.notes.find((n) => n.id === id) || {
        id: '',
        title: '',
        description: '',
        updatedAt: ''
    };

