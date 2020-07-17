import moment from "moment";
import {ISyncable} from "../interfaces/ISyncable";

export default (a: ISyncable, b: ISyncable) => {
    if (moment(a.updatedAt) > moment(b.updatedAt)) {
        return 1;
    } else if (moment(a.updatedAt) < moment(b.updatedAt)) {
        return -1;
    }
    return 0;
};
