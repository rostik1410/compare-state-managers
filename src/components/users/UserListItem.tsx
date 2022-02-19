import React from 'react'
import type { SimpleUser } from '../../models/user'

interface UserListItemProps {
  user: SimpleUser
}

const UserListItem = ({user}: UserListItemProps) => {
  return (
        <tr>
            {Object.keys(user).map(
              k => <td>{user[k]}</td>
            )}
        </tr>
    )
}

export default UserListItem
