import {ISyncable} from "./ISyncable";

export interface ITodo extends ISyncable {
    description: string;
    done: boolean;
}
