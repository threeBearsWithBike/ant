import { Link, Outlet } from 'react-router-dom';
import { useReducer } from 'react';
import { Context } from '../context';
import { reducer } from '../reducer';
import '../css/layout.css';

export const initialState = {
    field: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],

    ant: [3, 6],

    way: {
        north: true,
        east: false,
        south: false,
        west: false
    },

    startGame: false,

    speed: 1000,

    step: 0
}

const getInitialState = (size) => {
    const initialState = {
        field: [],
    
        ant: [3, 6],
    
        way: {
            north: true,
            east: false,
            south: false,
            west: false
        },
    
        startGame: false,
    
        speed: 1000,
    
        step: 0
    }

    for (let i=0; i < size; i++) {
        let row = [];
        for (let j=0; j < size; j++) {
            row = [...row, 0];
        }
        initialState.field.push(row);
    }

    return initialState;
}

const Layout = () => {
    const [state, dispatch] = useReducer(reducer, 10, getInitialState);

    return (
        <div className='Layout'>
            <header>
                <h1 className='title'>Langton's Ant</h1>
                <div className='main-img'></div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/settings'>Settings</Link>
                    <Link to='/game'>Game</Link>
                </nav>
            </header>
            <main>
                <Context.Provider value={{state, dispatch}}>
                    <Outlet />
                </Context.Provider>
            </main>
            <footer>Product by Medvedev</footer>
        </div>
    )
}

export default Layout;