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
                className={state.speed === 1000 ? 'active' : 'btn-game'}>
                    slow
                </button>
                <button onClick={() => {
                    dispatch({type: 'choiceOfSpeed', payload: 500})
                }}
                className={state.speed === 500 ? 'active' : 'btn-game'}>
                    average
                </button>
                <button onClick={() => {
                    dispatch({type: 'choiceOfSpeed', payload: 0})
                }}
                className={state.speed === 0 ? 'active' : 'btn-game'}>
                    high
                </button>
            </p>
            <p>
                <h3>Размер поля</h3>
                <p>Перед путешествием можно выбрать размер мира, по которому будет бегать муравей</p>
                <button
                    className={state.field.length === 10 ? 'active' : 'btn-game'}
                    disabled={state.step !== 0}
                    onClick={() => dispatch({type: 'resizeField', payload: 10})}
                >
                        10X10
                </button>
                <button
                    className={state.field.length === 20 ? 'active' : 'btn-game'}
                    disabled={state.step !== 0}
                    onClick={() => dispatch({type: 'resizeField', payload: 20})}
                >
                        20X20
                </button>
                <button
                    className={state.field.length === 40 ? 'active' : 'btn-game'}
                    disabled={state.step !== 0}
                    onClick={() => dispatch({type: 'resizeField', payload: 40})}
                >
                        40X40
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
            <p>
                <h3>Выбрать направление движения муравья</h3>
                <button
                    className={state.way.north ? 'active' : 'btn-game'}
                    disabled={state.step !== 0}
                    onClick={() => dispatch({type: 'setWay', payload: 'north'})}
                >
                    N
                </button>
                <button
                    className={state.way.south ? 'active' : 'btn-game'}
                    disabled={state.step !== 0}
                    onClick={() => dispatch({type: 'setWay', payload: 'south'})}
                >
                    S
                </button>
                <button
                    className={state.way.west ? 'active' : 'btn-game'}
                    disabled={state.step !== 0}
                    onClick={() => dispatch({type: 'setWay', payload: 'west'})}
                >
                    W
                </button>
                <button
                    className={state.way.east ? 'active' : 'btn-game'}
                    disabled={state.step !== 0}
                    onClick={() => dispatch({type: 'setWay', payload: 'east'})}
                >
                    E
                </button>
            </p>
        </section>
    )
}

export default Settings;