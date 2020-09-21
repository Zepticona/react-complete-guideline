import React from 'react';

const UserInput = (props) => {
    return <input onChange={props.changeUserName} value={props.startingName} type="text"/>
}

export default UserInput;