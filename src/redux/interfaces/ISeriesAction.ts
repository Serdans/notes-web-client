import {IAction} from "./IAction";
import {SeriesAction} from "../enums/SeriesAction";
import {ISeries} from "../../interfaces/ISeries";

export interface ISeriesAction extends IAction<SeriesAction, Partial<ISeries>> {

}
