import {IRootState} from "../interfaces/IRootState";
import moment from "moment";
import {ITodo} from "../../interfaces/ITodo";

export const getAllTodos = (state: IRootState): Array<ITodo> =>
    state.todos.sort((a, b) => {
        if (moment(a.updatedAt) > moment(b.updatedAt)) {
            return 1;
        } else if (moment(a.updatedAt) < moment(b.updatedAt)) {
            return -1;
        }
        return 0;
    });
