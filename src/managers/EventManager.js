export const getAllEvents = () => {
    return fetch(`http://localhost:8000/events`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const getSingleEvent = (id) => {
    return fetch(`http://localhost:8000/events/${id}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}


export const createEvent = (newEventObject) => {
    return fetch(`http://localhost:8000/events`, { 
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(newEventObject)
    })
    .then(response => response.json())
}

export const updateEvent = (body) => { 
    return fetch(`http://localhost:8000/games/${body.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(body)
    })
    .then
} 
