import { useContext, useEffect } from "react";
import { Context } from "../context";
import Field from "../components/Field";
import '../css/game.css';

const Game = () => {
    const {state, dispatch} = useContext(Context);
    useEffect(() => {
        if (state.startGame) {
            let idInteval = setInterval(() => {
                dispatch({type: 'changeStatusCell'});
                dispatch({type: 'moveAnt'});
            }, state.speed);
            return () => clearInterval(idInteval);
        }
    }, [state.startGame, state.speed]);
    
    return (
        <section>
            <h2>Game</h2>
            <p>
                <Field />
            </p>
            <p>
                Муравей сделал шагов: {state.step}
            </p>
            <button
                onClick={() => dispatch({type: 'game'})}
                className='btn-game'>
                {state.startGame ? 'Pause' : 'Start'}
            </button>
            <button
                onClick={() => dispatch({type: 'reset'})}
                className='btn-game'>
                reset
            </button>
        </section>
    )
}

export default Game;