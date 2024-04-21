import { Link, Outlet } from 'react-router-dom';
import { useReducer } from 'react';
import { reducer } from '../reducer';
import { Context } from '../context';
import '../css/layout.css';

const initialState = {
    field: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],

    ant: [1, 3],

    way: {
        north: false,
        east: false,
        south: false,
        west: true
    }
}

const Layout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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