import {ISyncable} from "./ISyncable";

export interface INote extends ISyncable {
    title: string;
    description: string;
}
