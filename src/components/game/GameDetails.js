import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleGame } from "../../managers/GameManager";


export const GameDetails = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});

  const navigate = useNavigate()


  useEffect(() => {
    getSingleGame(gameId)
      .then(game => setGame(game));
  }, [gameId]);

  return (
    <>

      <section key={`game--${game.id}`} className="game">
        <h3 className="game__name">{game.title}</h3>
        <div className="game__type">Game Type: {game.game_type?.label}</div>
        <div className="game__maker">Maker: {game.maker}</div>
        <div className="game__players">{game.number_of_players} players needed</div>
        <div className="game__skillLevel">Skill level is {game.skill_level}</div>

        <button className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            navigate({ pathname: `/games/update/${game.id}` })
          }}
        >Edit Game</button>
      </section>

    </>
  );
}