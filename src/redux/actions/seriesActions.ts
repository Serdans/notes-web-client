import {ISeriesAction} from "../interfaces/ISeriesAction";
import {SeriesAction} from "../enums/SeriesAction";
import generateId from "../../utils/generateId";
import moment from "moment";

export const createSeries = (name: string, totalEpisodes: number): ISeriesAction => ({
    type: SeriesAction.CREATE_SERIES,
    payload: {
        id: generateId(),
        currentEpisode: 0,
        name,
        totalEpisodes,
        updatedAt: moment().toISOString()
    }
});

export const updateSeries = (id: string, name: string, totalEpisodes: number): ISeriesAction => ({
    type: SeriesAction.UPDATE_SERIES,
    payload: {
        id,
        name,
        totalEpisodes,
        updatedAt: moment().toISOString()
    }
});

export const deleteSeries = (id: string): ISeriesAction => ({
    type: SeriesAction.DELETE_SERIES,
    payload: {
        id
    }
});

export const increaseEpisodeCount = (id: string): ISeriesAction => ({
    type: SeriesAction.INCREASE_COUNT,
    payload: {
        id,
        updatedAt: moment().toISOString()
    }
});

export const decreaseEpisodeCount = (id: string): ISeriesAction => ({
    type: SeriesAction.DECREASE_COUNT,
    payload: {
        id,
        updatedAt: moment().toISOString()
    }
});

