import React, { Component } from 'react'
import axios from 'axios';


import { UserCard } from './UserCard';
import { apiUrl } from '../api/api';


export default class UserSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            error: {}
        };
    }

    componentDidMount() {
        (async () => {
            try {
                const users = await axios.get(apiUrl);
                this.setState({ users: users.data });
            } catch (err) {
                this.setState({ error: 'Failed to fetch users' })
            }
        })();
    }

    render() {
        const { users: { members }, error } = this.state;
        if (members) {
            return (
                <>
                    {members.map(user => <UserCard key={user.id} user={user} />)}
                </>
            );
        }
        return (error === {}) ? <div>{error}</div> : <div>Loading...</div>
    }
}