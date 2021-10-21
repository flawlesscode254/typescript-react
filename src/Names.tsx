import React from 'react'
import User from './interfaces/user'

function Names( user: User ) {
    const {username, email, body, comment} = user

    return (
        <div>
            <h1>{username}</h1>
            <p>{email}</p>
            <h3>{body}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Names
