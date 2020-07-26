import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';

import { LatestActivity } from './LatestActivity';
import { ActivityByDate } from './ActivityByDate';
import { formatDate, formatDateArray } from '../utility/FormatDate';

export const UserModal = ({ handleClose, show, userActivity }) => {

    let startDate = moment(formatDate(userActivity[userActivity.length - 1].start_time), 'MMM Do YYYY hmA');
    let endDate = moment(formatDate(userActivity[userActivity.length - 1].end_time), 'MMM Do YYYY hmA');

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Activity Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LatestActivity startDate={startDate} endDate={endDate} />
                    <ActivityByDate dates={formatDateArray(userActivity)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}