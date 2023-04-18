import React from 'react';

function UserList(){

const users = [
    {id: 1, firstName: 'Duane', lastName: 'Watson'},
    {id: 2, firstName: 'Duane', lastName: 'Johnson'},
    {id: 1, firstName: 'Emma', lastName: 'Watson'},
];

const userHeadings = users.map((user) => {
    return <h1 key={user.id}>{user.firstName} {user.lastName}</h1>
});
    return (
        <div>
            {userHeadings}
        </div>
    );
}



export default UserList;