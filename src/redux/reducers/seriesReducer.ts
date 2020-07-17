import {ISeries} from "../../interfaces/ISeries";
import {ISeriesAction} from "../interfaces/ISeriesAction";
import {Reducer} from "redux";
import {SeriesAction} from "../enums/SeriesAction";

const seriesReducer: Reducer<Array<ISeries>, ISeriesAction> =
    (state: Array<ISeries> | undefined, action: ISeriesAction): Array<ISeries> => {

    if (!state) {
        return [];
    }

    switch (action.type) {
        case SeriesAction.CREATE_SERIES:
            const newSeries: ISeries = {
                ...action.payload
            };
            return [
                ...state,
                newSeries
            ];
        default:
            return state;
    }

};

export default seriesReducer;
