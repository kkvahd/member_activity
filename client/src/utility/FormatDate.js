import moment from 'moment';

export const formatDate = (date) => {
    if (typeof (date) !== 'string') return;

    date = date.replace('  ', ' ');
    date = date.replace('PM', ' PM');
    date = date.replace('AM', ' AM');
    return date;
}

export const formatDateArray = (dates) => {
    for (let i = 0; i < dates.length; i++) {
        if (typeof dates[i].star_time !== 'string') {
            return dates;
        }
        let start_time = dates[i].start_time;
        let end_time = dates[i].end_time;

        dates[i].start_time = moment(formatDate(start_time), 'MMM Do YYYY hmA');
        dates[i].end_time = moment(formatDate(end_time), 'MMM Do YYYY hmA');
    }

    return dates;
}