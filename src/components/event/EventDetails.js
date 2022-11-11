import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleEvent } from '../../managers/EventManager.js'
import { getSingleGame } from '../../managers/GameManager.js'

export const EventDetails = () => {
  // Need to be able to access eventId
  const { eventId } = useParams()
  // State variable and Setter function for state variable
  const [details, setDetails] = useState({
  })

  // Create useEffect that monitors the state of gameId
    // Gets a single game by its id then sets the details of the game
  useEffect(
    () => {
    getSingleEvent(eventId).then(
        (theEvent) => {
          setDetails(theEvent)
        }
    )
  }, [eventId])

  
  return <>
    <h2>Your Event</h2>
    <div>Organized by {details.organizer}</div>
    <div>Description: {details.description}</div>
    <div>Date of Event: {details.eve}</div>
    
    <h3>Type of game:</h3>
    {
      details.gameTypes.map(
        type => <div>Type {type.game_type}</div>
      )
    }
  </>
  

}