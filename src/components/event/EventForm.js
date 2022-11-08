import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const EventForm = () => {

    const [event, setEvent] = useState({
        organizer: "",
        description: "",
        game: "",
        eventTypeId: 0,
        date:"" 
    })

    const navigate = useNavigate()
    const [eventTypes, setEventTypes] = useState()

    useEffect(() => {
        fetch(`http://localhost:8000/eventTypes`)
            .then((response) => response.json())
            .then((eventTypeArray) => {
                setEventTypes(eventTypeArray)
            })
    
    }, [])
    

    // * TODO :
    // 1) Set state variable
    // 2) Create fetch call

    const createEvent = (evt) => {
        evt.preventDefault()

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                organizer: event.organizer,
                description: event.description,
                numberOfPlayers: event.numberOfPlayers,
                skillLevel: event.skillLevel,
                eventTypeId: event.eventTypeId
            })
        }

        return fetch("http://localhost:3000/events", fetchOption)
            .then(() => {
                navigate("/events")
            })
    }

    

    return (
        <form>
            <h2>New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="organizer">Organizer:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.organizer = evt.target.value
                                setEvent(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Organizer of Event"
                        />
                </div>
            </fieldset>
            <fieldset>
                <input
                required autoFocus
                type="date"
                className="form-control"
                value= {event.date}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.date = evt.target.value
                                setEvent(copy)
                            }
                        }
                        />
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.description = evt.target.value
                                setEvent(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.numberOfPlayers = evt.target.value
                                setEvent(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Number of Players"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="skillLevel">Skill Level:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.skillLevel = evt.target.value
                                setEvent(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Skill Level"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventType">Type of Event:</label>
                    <select
                        className='gameType'
                        onChange={(evt) => {
                            const copy = { ...event };
                            copy.eventTypeId = evt.target.value;
                            setEvent(copy);
                        }}
                    >
                        <option value={0}>Please Select the Type of Event You Will Be Hosting</option>
                        {eventTypes.map((eventType) => {
                                return <option value={eventType.id}>{eventType.description}</option>;
                        })}
                    </select>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.eventType = evt.target.value
                                setEvent(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Type of Event"
                        />
                </div>
            </fieldset>
            <button onClick={createEvent} className="btn btn-primary">
                Create Event
            </button>
        </form>
    )
}