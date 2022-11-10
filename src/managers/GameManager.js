export const getAllGames = () => {
    return fetch(`http://localhost:8000/games`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getAllGameTypes = () => {
    return fetch(`http://localhost:8000/gametypes`, { 
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}


export const getSingleGame = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}


export const createGame = (newGameObject) => {
    return fetch(`http://localhost:8000/games`, { 
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(newGameObject)
    })
    .then(response => response.json())
}

/* 
    Game Details
    title: "",
    skillLevel: 1,
    numberOfPlayers: 0,
    maker: "",
    gameTypeId: 0
  */
export const updateGame = (game) => { 
    return fetch(`http://localhost:8000/games/${game.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(game)
    })
    .then
}

