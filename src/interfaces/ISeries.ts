import {ISyncable} from "./ISyncable";

export interface ISeries extends ISyncable {
    name: string;
    currentEpisode: number;
    totalEpisodes: number;
}
