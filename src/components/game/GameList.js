import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { getGames } from "../../managers/GameManager.js"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getGames().then(gamesArray => setGames(gamesArray))
    }, [])

    return (
        <>
        <h1>Game List</h1>
        <article className="games">


            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <Link to={`/games/${game.id}`} className="game__title">{game.title} by {game.maker}</Link>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                    </section>
                })
            }
        </article>
        </>
    )
}