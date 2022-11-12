import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getGameTypes, getSingleGame, updateGame } from '../../managers/GameManager.js'



export const UpdateGameForm = () => {

    const { gameId } = useParams()

    const [currentGame, setCurrentGame] = useState({})

    const [gameTypes, setGameTypes] = useState([])

    const navigate = useNavigate()


    useEffect(
        () => {
            getSingleGame(gameId).then(game => setCurrentGame(game))
            getGameTypes().then(type => setGameTypes(type))
        }, [gameId])

    const changeGameState = (domEvent) => {
        const newGame = Object.assign({}, currentGame)
        newGame[domEvent.target.name] = domEvent.target.value
        setCurrentGame(newGame)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Update Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" className="form-control"
                        required autoFocus
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maker">Maker: </label>
                    <input type="text" name="maker" className="form-control"
                        required autoFocus
                        value={currentGame.maker}
                        onChange={changeGameState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number_of_players">Number of Players: </label>
                    <input type="number" name="number_of_players" className="form-control"
                        required autoFocus
                        value={currentGame.number_of_players}
                        onChange={changeGameState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skill_level">Skill Level: </label>
                    <input type="number" name="skill_level" className="form-control"
                        required autoFocus
                        value={currentGame.skill_level}
                        onChange={changeGameState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="game_type">Game Type: </label>
                    <select id="type" name="game_type" className="form-control"
                        onChange={changeGameState}>
                        <option value={0}>{currentGame.game_type?.label}</option>

                        {
                            gameTypes.map(gameType =>
                                <option value={gameType.id} key={gameType.id}>{gameType.label}</option>
                            )
                        }


                    </select>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    if (currentGame.game_type.id) {
                        const newGame = {
                            maker: currentGame.maker,
                            title: currentGame.title,
                            numberOfPlayers: parseInt(currentGame.number_of_players),
                            skillLevel: parseInt(currentGame.skill_level),
                            gameType: parseInt(currentGame.game_type.id),
                        }

                        // Send POST request to your API
                        updateGame(newGame, gameId)
                            .then(() => navigate(`/games/${gameId}`))
                    }
                    else {
                        const newGame = {
                            maker: currentGame.maker,
                            title: currentGame.title,
                            numberOfPlayers: parseInt(currentGame.number_of_players),
                            skillLevel: parseInt(currentGame.skill_level),
                            gameType: parseInt(currentGame.game_type),
                        }
                        updateGame(newGame, gameId)
                            .then(() => navigate(`/games/${gameId}`))
                    }
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}