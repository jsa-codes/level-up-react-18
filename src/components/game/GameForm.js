import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createGame, getAllGameTypes } from '../../managers/GameManager.js'


export const GameForm = () => {
    const [gameTypes, setGameTypes] = useState([])
    const navigate = useNavigate()
    
    const [game, updateGame] = useState({
        title: "",
        skillLevel: 1,
        numberOfPlayers: 0,
        maker: "",
        gameTypeId: 0
    })

    useEffect(() => {
        getAllGameTypes().then(setGameTypes)
    }, [])

    const submitGame = (evt) => {
        evt.preventDefault()
        const gameObject = {
            maker: game.maker,
            title: game.title,
            numberOfPlayers: parseInt(game.numberOfPlayers),
            skillLevel: parseInt(game.skillLevel),
            gameType: parseInt(game.gameTypeId)
                    }
        createGame(gameObject).then(() => navigate("/games"))
    }

    const changeGameState = (evt) => {
        const copy = { ...game }
        copy[evt.target.id] = evt.target.value
        updateGame(copy)
    }

    return (
        <>
        <form className='game-form'>
            <h2 className='gameForm__title'>Create New Game</h2>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input 
                    onChange={changeGameState}
                        required autoFocus
                        type="text" id="title"
                        className="form-control"
                        placeholder="Game title"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Maker: </label>
                    <input 
                    onChange={changeGameState}
                        required autoFocus
                        type="text" id="maker"
                        className="form-control"
                        placeholder="Maker"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players: </label>
                    <input 
                    onChange={changeGameState}
                        required autoFocus
                        type="number" id="numberOfPlayers"
                        className="form-control"
                        placeholder="Number of Players"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Skill Level: </label>
                    <input 
                    onChange={changeGameState}
                        required autoFocus
                        type="text" id="skillLevel"
                        className="form-control"
                        placeholder="Skill Level"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="gameType">Type of Game: </label>
                    <select name="gameType" id="gameTypeId"
                        onChange={changeGameState}
                        defaultValue={game.gameTypeId}>
                    <option value="0">Choose the Type of Game</option>
                    {
                        gameTypes.map(gameType => <option key={gameType.id} value={gameType.id}>{gameType.label}</option>)
                    }
                    </select>
                </div>
            </fieldset>

            <button onClick={submitGame} className="btn btn-2 ">
                Save Game
            </button>
        </form>
        </>
    )
}