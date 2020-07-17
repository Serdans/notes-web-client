import {Reducer} from "redux";
import {INoteAction} from "../interfaces/INoteAction";
import {INote} from "../../interfaces/INote";
import {NoteAction} from "../enums/NoteAction";

const noteReducer: Reducer<Array<INote>, INoteAction> = (state: Array<INote> | undefined, action: INoteAction): Array<INote> => {

    if (!state) {
        return [];
    }

    switch (action.type) {
        case NoteAction.CREATE_NOTE:
            const { id, title, description, updatedAt } = action.payload;
            const newNotes: Array<INote> = [...state];

            if (id && title && description && updatedAt) {
                newNotes.push({
                    id,
                    title,
                    description,
                    updatedAt
                });
            }

            return newNotes;
        case NoteAction.UPDATE_NOTE:
            return state.map((n) => {
                const { title, description, updatedAt } = action.payload;
                if (n.id === action.payload.id &&
                    (title && description && updatedAt)
                ) {
                    n.title = title;
                    n.description = description;
                    n.updatedAt = updatedAt;
                }
                return n;
            });
        case NoteAction.DELETE_NOTE:
            return state.filter((n) => n.id !== action.payload.id);
        default:
            return state;
    }
};

export default noteReducer;
