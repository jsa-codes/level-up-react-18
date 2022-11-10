import React, { useEffect, useState } from "react"
import { getAllEvents } from '../../managers/EventManager'

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])

    useEffect(() => {
        getAllEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__date">{event.date}</div>
                        <div className="event__game">{event.game}</div>
                        <div className="event__description">{event.description}</div>
                    </section>
                })
            }
        </article>
    )
}