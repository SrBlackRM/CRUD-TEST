import React, { useState } from 'react';

function UserForm({ onSave, editing }){
    const [user, setUser] = useState({
        "email": "",
        "first_name": "",
        "last_name": "",
        "username": "",
        "password": "",
        "phone": ""
    });

    const handleInputChange = (event) => {
        setUser({ ...user, [ event.target.name]:  event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({
            "email": "",
            "first_name": "",
            "last_name": "",
            "username": "",
            "password": "",
            "phone": ""
        });
        onSave(user);
    };

    const close = () => {
        
    }

    return(
        <form onSubmit={handleSubmit} className="user-form">
            <span className='span-editing'>{editing ? "Editing " : "Creating a new User"}</span>
            <label className="label-input">
                First Name
                <input type="text" name="first_name" value={user.first_name} onChange={handleInputChange} className='input-editing'></input>
            </label>
            <label className="label-input">
                Last Name
                <input type="text" name="last_name" value={user.last_name} onChange={handleInputChange} className='input-editing'></input>
            </label>
            <label className="label-input">
                Email
                <input type="text" name="email" value={user.email} onChange={handleInputChange} className='input-editing'></input>
            </label>
            <label className="label-input">
                Phone
                <input type="text" name="phone" value={user.phone} onChange={handleInputChange} className='input-editing'></input>
            </label>
            <label className="label-input">
                Usename
                <input type="text" name="username" value={user.username} onChange={handleInputChange} className='input-editing'></input>
            </label>
            <label className="label-input">
                Password
                <input type="password" name="password" value={user.password} onChange={handleInputChange} className='input-editing'></input>
            </label>
            <div class="buttons-save-close-group">
                <button type="submit" className='button-save-close'>{user ? "Save" : "Create"}</button>
                {editing ? <button onClick="close" className='button-save-close'> X </button> : ""}
            </div>
        </form>
    );
}

export default UserForm;