import * as moment from "moment";

export const dateFormat = (date) => {
    const dateMomentObject = moment(date, 'DD.MM.YYYY');
    return moment(dateMomentObject).format('Do MMMM YYYY, ddd')
}