import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getGames } from "../../managers/GameManager.js"

export const GameList = () => {
    const [games, setGames] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            getGames().then(data => setGames(data))
        },
        []
    )

    return <>
        <h1>Game List</h1>
        <article className='games'>
            <button
                className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" });
                }}>Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                        <button onClick={
                            () => {
                                navigate({ pathname: `/games/${game.id}` })
                            }
                        }
                        >Game Details</button>
                    </section>
                }
                )
            }
        </article>
    </>

}