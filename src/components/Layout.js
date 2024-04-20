import { Link, Outlet } from 'react-router-dom';
import '../css/layout.css';

const Layout = () => {
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
                <Outlet />
            </main>
            <footer>Product by Medvedev</footer>
        </div>
    )
}

export default Layout;