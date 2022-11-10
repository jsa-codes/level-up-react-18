import { createEvent } from '@testing-library/react'
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllGames } from '../../managers/GameManager'


export const EventForm = () => {
    const [event, updateEvent] = useState({
        gameId: 0,
        description: "",
        date:"",
        time: ""
        
    })

    const [games, setGames] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {
        getAllGames().then(setGames)
    }, []
    )


    const submitEvent = (evt) => {
        evt.preventDefault()
        const eventObject = {
            game: event.gameId,
            description: event.description,
            date: event.date,
            time: event.time
        }
        createEvent(eventObject).then(() => navigate("/events"))
    }

    const changeEventState = (evt) => {
        const copy = { ...event }
        copy[evt.target.id] = evt.target.value
        updateEvent(copy)
    }
    

    return (
        <>
        <form className='game-form'>
            <h2 className='gameForm__title'>Create New Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="organizer">Organizer: </label>
                <input 
                onChange={changeEventState}
                    required autoFocus
                    type="text" id="organizer"
                    className="form-control"
                    placeholder="Organizer"
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description: </label>
                <input 
                onChange={changeEventState}
                    required autoFocus
                    type="text" id="description"
                    className="form-control"
                    placeholder="Description"
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="numberOfPlayers">Number of Players: </label>
                <input 
                onChange={changeEventState}
                    required autoFocus
                    type="number" id="numberOfPlayers"
                    className="form-control"
                    placeholder="Number of Players"
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="date">Date: </label>
                <input 
                onChange={changeEventState}
                    required autoFocus
                    type="date" id="date"
                    className="form-control"
                    placeholder="Date"
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="time">Time: </label>
                <input 
                onChange={changeEventState}
                    required autoFocus
                    type="time" id="time"
                    className="form-control"
                    placeholder="Scheduled Time"
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="game">Game: </label>
                <select name="game" id="gameId"
                    onChange={changeEventState}
                    defaultValue={event.gameId}>
                <option value="0">Choose the Game</option>
                {
                    games.map(game => <option key={game.id} value={game.id}>{game.title}</option>)
                }
                </select>
            </div>
        </fieldset>
        <button onClick={submitEvent} className="btn btn-2 ">
            Save Event
        </button>

        </form>
        </>
    )
}