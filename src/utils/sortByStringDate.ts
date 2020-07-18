import moment from "moment";
import {ISyncable} from "../interfaces/ISyncable";

export default (a: ISyncable, b: ISyncable, descending: boolean = true) => {
    if (moment(a.updatedAt) > moment(b.updatedAt)) {
        return descending ? -1 : 1;
    } else if (moment(a.updatedAt) < moment(b.updatedAt)) {
        return descending ? 1 : -1;
    }
    return 0;
};
