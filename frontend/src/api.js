const API_URL = "http://localhost:8000";

export async function getUsers(){
    const response = await fetch(`${API_URL}/users/`);
    const data = await response.json();
    return data;
}

export async function createUser(user){
    const response = await fetch(`${API_URL}/user/create/`, {
        method: 'POST',
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
}

export async function updateUser(id, user){
    const response = await fetch(`${API_URL}/update/user/${id}`,{
        method: 'PUT',
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if(!response.ok){
        const error = await response.json();
        throw new Error(error.message || "Failed to update User");
    }

    const data = await response.json();
    return data;
}

export async function deleteUser(id){
    const response = await fetch(`${API_URL}/delete/user/${id}`,{
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
}