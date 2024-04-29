import { useContext } from "react";
import { Context } from "../context";
import '../css/settings.css';

const Settings = () => {
    const {state, dispatch} = useContext(Context);
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
            <p>
                <h3>Размер поля</h3>
                <button
                    className='btn-game'>
                        10X10
                </button>
                <button
                    className='btn-game'>
                        20X20
                </button>
                <button
                    className='btn-game'>
                        50X50
                </button>
            </p>
            <p>
                <h3>Положение муравья на поле</h3>
                <p>Пока муравей не сделал ни одного шага, вы можете выбрать из какой части поля муравей начнет путешествие</p>
                <form action="#">
                    <label>
                        Ряд:
                        <input
                            type="number"
                            name="antsRow"
                            id=""
                            min="1"
                            max={state.field.length}
                            value={state.ant[0] + 1}
                            step="1"
                            onChange={(e) => dispatch({type: 'setRowAnt', payload: +e.target.value - 1})}
                            disabled={state.step !== 0}
                        />
                    </label>
                    <label>
                        Колонка:
                        <input
                            type="number"
                            name="antsCol"
                            id=""
                            min="1"
                            max={state.field.length}
                            value={state.ant[1] + 1}
                            step="1"
                            onChange={(e) => dispatch({type: 'setColAnt', payload: +e.target.value - 1})}
                            disabled={state.step !== 0}
                        />
                    </label>
                </form>
            </p>
        </section>
    )
}

export default Settings;