import React, { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getAllEvents } from '../../managers/EventManager'

export const EventList = () => {
    const [ events, setEvents ] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            getAllEvents().then(
                (eventsArray) => {
                    setEvents(eventsArray)
                }
            )
        }, 
        []
    )

    return (<>
        <h1>Event List</h1>
        <button className="btn btn-2 btn-sep icon-create"

        onClick={() => {navigate("/events/new")}}>Register New Event</button>
            {
                events.map(
                    event => {
                        return <section key={`event--${event.id}`} className="event">
                            
                            <div className="event__game">{event.game}</div>
                            <div className="event__description">{event.description}</div>
                            <div className="event__date"> Event date: {event.date} at {event.time}</div>
                            <div className="event__organizer">Event set up by {event.organizer}</div>
                            
                        </section>
                })
            }
        </>
    )
}