import React from "react";

function UserList({ users, onEdit, onDelete }){
    const imgs = {
        "editar":"/assets/editar.png",
        "deletar":"/assets/remover-usuario.png",
    }
    return(
        <div>
            <ul className="user-list-ul">
                <div className="list-span">
                    <li>nome</li>
                    <li>email</li>
                    <li>telefone</li>
                </div>
                {users.map((user)=>(
                    <li key={user.id} className="user-list">
                        <div class="span-group">
                            <span>{user.first_name}</span>
                            <span>{user.email}</span>
                            <span>{user.phone}</span>
                        </div>
                        <div className="buttons-group">
                            <img onClick={()=>onEdit(user.id, user)} className="btn btn-list btn-edit" src={imgs.editar}/>{" "}
                            <img onClick={()=>onDelete(user.id)} className="btn btn-list btn-delete" src={imgs.deletar}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default UserList;