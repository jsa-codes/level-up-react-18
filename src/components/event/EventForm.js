import { createEvent } from "../../managers/EventManager.js"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import {  getAllGames } from '../../managers/GameManager.js'


export const EventForm = () => {
    const navigate = useNavigate()
    const [games, setGames] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentEvent, setCurrentEvent] = useState({
        gameId: 0,
        description: "",
        date: "",
        time: "",
        organizer: 0
    })

    useEffect(() => {
        getAllGames().then(data => setGames(data))
    }, [])

    const changeEventState = (evt) => {
        let stateEvent = { ...currentEvent }
        stateEvent[evt.target.name] = evt.target.value
        setCurrentEvent(stateEvent)
    }

    return (
        <form className="eventForm">
        <h2 className="eventForm_Title">Register New Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="game">Game: </label>
                <select type="text" name="gameId" required autoFocus className="form-control"
                    value={parseInt(currentEvent.gameId)}
                    onChange={changeEventState}>
                        <option value={0}>Select a Game</option>
                        {
                            games.map(game => {
                                return <option value={game.id}>{game.title}</option>
                            })
                        }
                    </select>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" required className="form-control"
                    value={currentEvent.description}
                    onChange={changeEventState}
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date: </label>
                <input type="date" name="date" required className="form-control"
                    value={currentEvent.date}
                    onChange={changeEventState}
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Time: </label>
                <input type="time" name="time" required className="form-control"
                    value={currentEvent.time}
                    onChange={changeEventState}
                />
            </div>
        </fieldset>

        {/* TODO: create the rest of the input fields */}

        <button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()

                const event = {
                    game: currentEvent.gameId,
                    description: currentEvent.description,
                    date: currentEvent.date,
                    time: currentEvent.time
                }

                // Send POST request to your API
                createEvent(event)
                    .then(() => navigate("/events"))
            }}
            className="btn btn-primary">Create</button>
    </form>
    )
}