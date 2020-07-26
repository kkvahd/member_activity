import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { UserModal } from './UserModal';

export const UserCard = ({ user }) => {

    const [show, setShow] = useState(false);

    const hideModal = () => setShow(false);
    const showModal = () => setShow(true);

    if (user) {
        const { real_name, tz, activity_periods } = user;
        return (
            <>
                <Card className="usersCard bg-dark text-white">
                    <Card.Body>
                        <Card.Title>{real_name}</Card.Title>
                        <Card.Text>
                            {tz}
                        </Card.Text>
                        <Button variant="light" onClick={showModal}>More</Button>
                        <UserModal userActivity={activity_periods} show={show} handleClose={hideModal} />
                    </Card.Body>
                </Card>
            </>
        );
    } else {
        return <div></div>
    }
}
