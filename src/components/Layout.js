import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>
                <h1>Ant</h1>
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