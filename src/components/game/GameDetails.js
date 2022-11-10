import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleGame } from '../../managers/GameManager'

export const GameDetails = () => {
  // Need to be able to access gameId
  const { gameId } = useParams()
  // State variable and Setter function for state variable
  const [details, setDetails] = useState({
      gameTypes: []
  })

  // Create useEffect that monitors the state of gameId
    // Gets a single game by its id then sets the details of the game
  useEffect(
    () => {
    getSingleGame(gameId).then(
        (theGame) => {
          setDetails(theGame)
        }
    )
  }, [gameId])

  /* 
    Game Details
    title: "",
    skillLevel: 1,
    numberOfPlayers: 0,
    maker: "",
    gameTypeId: 0
  */
  return <>
    <h2>{details.title}</h2>

    <div>Made by {details.maker}</div>
    <div>Skill Level: {details.skillLevel}</div>
    <div>Can be played by {details.numberOfPlayers}</div>
    
    <h3>Type of game:</h3>
    {
      details.gameTypes.map(
        type => <div>Type {type.game_type}</div>
      )
    }
  </>
  

}