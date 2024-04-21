import { useContext } from "react";
import { Context } from "../context";
import Field from "../components/Field";

const Game = () => {
    const {state, dispatch} = useContext(Context);
    return (
        <section>
            <h2>Game</h2>
            <p><Field /></p>
        </section>
    )
}

export default Game;