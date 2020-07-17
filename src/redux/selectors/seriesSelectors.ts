import {IRootState} from "../interfaces/IRootState";
import {ISeries} from "../../interfaces/ISeries";
import sortByStringDate from "../../utils/sortByStringDate";

export const getAllSeries = (state: IRootState): Array<ISeries> =>
    state.series.sort(sortByStringDate);
