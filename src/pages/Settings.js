import { useContext } from "react";
import { Context } from "../context";
import '../css/settings.css';

const Settings = () => {
    const {dispatch} = useContext(Context);
    return (
        <section>
            <h2>Settings</h2>
            <p>
                <h3>Скорость перемещения муравья</h3>
                <button onClick={() => {
                    dispatch({type: 'choiceOfSpeed', payload: 1000})
                }}
                className='btn-game'>
                    slow
                </button>
                <button onClick={() => {
                    dispatch({type: 'choiceOfSpeed', payload: 500})
                }}
                className='btn-game'>
                    average
                </button>
                <button onClick={() => {
                    dispatch({type: 'choiceOfSpeed', payload: 0})
                }}
                className='btn-game'>
                    high
                </button>
            </p>
        </section>
    )
}

export default Settings;