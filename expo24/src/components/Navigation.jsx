import { Outlet, Link } from 'react-router-dom';
import LogoB from '../assets/LogoB.svg';


function Navigation() {
    return (
        <>
            <nav className="NavContainer">
                <Link to="/">
                    <img src={LogoB} alt="Logo" />
                </Link>
                <div>
                    <ul className="Nav">
                        <li>
                            <Link to="/Activities">Programma</Link>
                        </li>
						<li className="dropdown">
                            <span className="dropdown-toggle">
                                Showcase<span class="material-symbols-outlined">
keyboard_arrow_down
</span>
                            </span>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/Item2">Awards</Link>
                                </li>
                                <li>
                                    <Link to="/Item3">Projecten</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/Accessibility">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/Practical">Bereikbaarheid</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;
