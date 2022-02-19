import React from 'react'
import { Post } from '../../models/post';
import { SimpleUser, User } from '../../models/user';
import UsersListItem from './UserListItem'

interface UsersListProps {
    users: Array<User>,
};


const TableHeaders = [
    'Name',
    'Username',
    'Email',
    'Phone',
    'Website',
]

const UsersList = ({ users }: UsersListProps) => {
    return (
        <table>
            <thead>{
                TableHeaders.map(head => <th>{head}</th>)
            }</thead>
            <tbody>
                {users.map(user => <UsersListItem user={user as SimpleUser} />)}
            </tbody>
        </table>
    )
}

export default UsersList;
