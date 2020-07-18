import {ISeries} from "../../interfaces/ISeries";
import {ISeriesAction} from "../interfaces/ISeriesAction";
import {Reducer} from "redux";
import {SeriesAction} from "../enums/SeriesAction";
import produce from "immer";

const seriesReducer: Reducer<Array<ISeries>, ISeriesAction> =
    (state: Array<ISeries> | undefined, action: ISeriesAction): Array<ISeries> => {

    if (!state) {
        return [];
    }

    switch (action.type) {
        case SeriesAction.CREATE_SERIES:
            const { id, totalEpisodes, currentEpisode, name, updatedAt } = action.payload;
            const series: Array<ISeries> = [...state];
            if (id && totalEpisodes !== undefined && currentEpisode !== undefined && name && updatedAt) {
                series.push({
                    id, totalEpisodes, currentEpisode, name, updatedAt
                });
            }
            return series;
        case SeriesAction.INCREASE_COUNT:
            return state.map((s) => {
                if (s.id === action.payload.id && s.currentEpisode < s.totalEpisodes) {
                    return produce(s, sDraft => {
                        const { updatedAt } = action.payload;
                        sDraft.currentEpisode++;
                        sDraft.updatedAt = updatedAt ? updatedAt : sDraft.updatedAt;
                    });
                }
                return s;
            });
        case SeriesAction.DECREASE_COUNT:
            return state.map((s) => {
                if (s.id === action.payload.id && s.currentEpisode > 0) {
                    return produce(s, sDraft => {
                        const { updatedAt } = action.payload;
                        sDraft.currentEpisode--;
                        sDraft.updatedAt = updatedAt ? updatedAt : sDraft.updatedAt;
                    });
                }
                return s;
            });
        case SeriesAction.UPDATE_SERIES:
            return state.map((s) => {
                if (s.id === action.payload.id) {
                    return produce(s, sDraft => {
                        const { name, totalEpisodes } = action.payload;
                        sDraft.name = name || '';
                        sDraft.totalEpisodes = totalEpisodes || 0;
                    })
                }
                return s;
            });
        case SeriesAction.DELETE_SERIES:
            return state.filter((s) => s.id !== action.payload.id);
        default:
            return state;
    }

};

export default seriesReducer;
