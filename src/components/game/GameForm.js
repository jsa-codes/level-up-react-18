import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createGame, getGameTypes } from '../../managers/GameManager.js'


export const GameForm = () => {

    const [currentGame, updateGame] = useState({
        title: "",
        skillLevel: 1,
        numberOfPlayers: 0,
        maker: "",
        gameTypeId: 0
    })
    const navigate = useNavigate()
    const [gameTypes, setGameTypes] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */



    useEffect(() => {
        getGameTypes().then(setGameTypes)
    }, [])

    const changeGameState = (evt) => {
        const copy = { ...currentGame }
        copy[evt.target.id] = evt.target.value
        updateGame(copy)
    }

    const submitGame = (evt) => {
        evt.preventDefault()
        const gameObject = {
            title: currentGame.title,
            maker: currentGame.maker,
            numberOfPlayers: parseInt(currentGame.numberOfPlayers),
            skillLevel: parseInt(currentGame.skillLevel),
            gameType: parseInt(currentGame.gameTypeId)
        }
        createGame(gameObject).then(() => navigate("/games"))
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
                        <select type="text" name="gameTypeId"
                            required autoFocus
                            className='form-control'
                            value={parseInt(currentGame.gameTypeId)}
                            onChange={changeGameState}>
                            <option value={0}>Choose the Type of Game</option>
                            {
                                gameTypes.map(gameType => {
                                    return (
                                        <option value={gameType.id}>{gameType.label}</option>
                                    )
                                })
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