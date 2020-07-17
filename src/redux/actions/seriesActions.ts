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
