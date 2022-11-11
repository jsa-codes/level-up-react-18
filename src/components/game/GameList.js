import React, { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getAllGames } from "../../managers/GameManager.js"

export const GameList = () => {
    const [ games, setGames ] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            getAllGames().then(
                (gamesArray) => {
                    setGames(gamesArray)
                }
            )
        }, 
        []
    )

   return <>
        <h1>Game List</h1>
        <button onClick={() => {navigate("/games/new")}}>Create Game</button>
        {
            games.map(
                game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div><Link to={`games/${game.id}`} className="game__title">{game.title} by {game.maker} </Link></div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                    </section>
                }
            )
        }
    </>

}