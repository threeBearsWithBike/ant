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
            }, 100);
            return () => clearInterval(idInteval);
        }
    }, [state.startGame]);
    
    return (
        <section>
            <h2>Game</h2>
            <p>
                    <Field />
            </p>
            <button
                onClick={() => dispatch({type: 'game'})}
                // onClick={() => {
                //     dispatch({type: 'changeStatusCell'});
                //     dispatch({type: 'moveAnt'});
                // }}
                className='btn-game'>
                {state.startGame ? 'Pause' : 'Start'}
            </button>
        </section>
    )
}

export default Game;