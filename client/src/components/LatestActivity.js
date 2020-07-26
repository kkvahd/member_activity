import React from 'react';
import { Alert } from 'react-bootstrap';


export const LatestActivity = ({startDate, endDate}) => {
    return (
        <div id="latestActivity">
            <p>Latest Activity</p>
            <Alert variant='info'>
                The user was active from
                        <strong>{' ' + startDate.format("hh:mm:ss a") + ' '}</strong>
                          to
                         <strong>{' ' + endDate.format("hh:mm:ss a") + ' '}</strong>
                         on
                         <strong>{' ' + endDate.format('MMM Do YYYY')}</strong>
            </Alert>
        </div>
    )
}
