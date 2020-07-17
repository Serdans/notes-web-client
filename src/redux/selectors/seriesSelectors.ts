import {IRootState} from "../interfaces/IRootState";
import {ISeries} from "../../interfaces/ISeries";
import sortByStringDate from "../../utils/sortByStringDate";

export const getAllSeries = (state: IRootState): Array<ISeries> =>
    state.series.sort(sortByStringDate);

export const getSeriesById = (state: IRootState, id: string): ISeries =>
    state.series.find((s) => s.id === id) || {
        id: '',
        name: '',
        totalEpisodes: 0,
        currentEpisode: 0,
        updatedAt: ''
    };
