import React, { useState, useEffect } from "react";
import UserList from  "./UserList";
import UserForm from "./UserForm";
import { getUsers, createUser, updateUser, deleteUser } from "./api";


function App(){
    const [users, setUsers ] = useState([]);
    const [editing, setEditing] = useState(false);
    const [creating, setCreating] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);
    const list_user = document.querySelectorAll('.user-list');

    const imgs = {
        "criar":"/assets/add-user.png",
        "cancelar":"/assets/close.png",
    }
    

    useEffect(() => {
        async function fetchData(){
            const data = await getUsers();
            setUsers(data);
        }
        fetchData();
    },[list_user]);

    const handleCreate = async (user) => {
        const data = await createUser(user);
        setUsers([...users, data]);
    };

    const handleUpdate = async (updatedUser) => {
        setEditing(false);
        await updateUser(currentUser, updatedUser);
        //setUsers(updatedUser.map(user => user.id === updatedUser.id ? data : user));
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        setUsers(users.filter( u => u.id !== id));
    };

    const handleEdit = async (user) => {
        if(!editing){
            setEditing(true);
            setCurrentUser(user);
        }else{
            setEditing(false);
        }
        
    };
    const buttonCreating = () => {
        if(creating) setCreating(false);
        else setCreating(true);
    };

    return(
        <div className="content">
            <div className="top-content">
                <span className="span-label">User Management</span>
                <img onClick={buttonCreating} className="btn btn-create-user" src={creating ? imgs.cancelar : imgs.criar} />
            </div>
            <div className="mid-content">
                <UserList users={users} onEdit={handleEdit} onDelete={handleDelete}/>
            </div>
            <div>
                {editing ? (
                    <>
                        <UserForm onSave={handleUpdate} editing="true" />
                    </>
                ) : creating ? (
                    <>
                        <UserForm onSave={handleCreate} />
                    </>
                ) : (
                    <></>
                    )}
            </div>
        </div>
    )
}

export default App;