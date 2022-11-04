import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createEvent, getEvents, getEventTypes } from '../../managers/EventManager.js'
import { getGameTypes } from '../../managers/GameManager.js'


export const EventForm = () => {
    const navigate = useNavigate()
    const [eventTypes, setEventTypes] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentEvent, setCurrentEvent] = useState({
        event: "",
        organizer: "",
        description: "",
        date: "",
        time: ""
    })

    useEffect(() => {
        // TODO: Get the event types, then set the state
        getEventTypes().then(data => setEventTypes)
    }, [])

    const changeEventState = (domEvent) => {
        // TODO: Complete the onChange function
    }

    return (
        <form className="eventForm">
            <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        navigate({ pathname: "/events/new" })
                    }}
                >Register New Event</button>
            <h2 className="eventForm__title">Register New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentEvent.title}
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
                        maker: currentEvent.maker,
                        title: currentEvent.title,
                        number_of_players: parseInt(currentEvent.numberOfPlayers),
                        skill_level: parseInt(currentEvent.skillLevel),
                        event_type: parseInt(currentEvent.eventTypeId)
                    }

                    // Send POST request to your API
                    createEvent(event)
                        .then(() => navigate("/events"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}