import React, { useState } from 'react';

import { Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

export const ActivityByDate = ({ dates }) => {

    const [date, setdate] = useState(0);

    let { start_time, end_time } = validateDate(date, dates);
    
    return (
        <div id="datePickerDiv">
            <p>Search activity by date</p>
            <DatePicker id="DatepickerInput" selected={date} onChange={date => setdate(date)} />
            {(date && start_time && end_time) ?
                <Alert variant='success'>
                    The user was active from
                    <strong>{' ' + start_time.format("hh:mm:ss a") + ' '}</strong>
                      to
                     <strong>{' ' + end_time.format("hh:mm:ss a") + ' '}</strong>
                     on
                     <strong>{' ' + end_time.format('MMM Do YYYY')}</strong>
                </Alert>
                : (date ?
                    <Alert variant='danger'>
                        The user was not active on this day
                    </Alert> : <div></div>)
            }
        </div>
    );
};

const validateDate = (date, dates) => {
    date = moment(date, 'MMM Do YYYY hmA');
    for (let i = 0; i < dates.length; i++) {
        const checkDate = moment(dates[i].end_time, 'MMM Do YYYY hmA');
        if ((date.month() === checkDate.month()) && (date.day() === checkDate.day())) {
            return {
                start_time: moment(dates[i].start_time, 'MMM Do YYYY hmA'),
                end_time: moment(dates[i].end_time, 'MMM Do YYYY hmA')
            }
        };
    }
    return false;
}
