import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import PersonIcon from '@mui/icons-material/Person';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <AppBar position="static">
            <Toolbar>
                <div className="navbar">
                    <div className="navbar__logo" style={ {
                            display: 'flex',
                            justifyContent : 'space-between',
                            alignItems: 'center'
                        }} >
                        <Link to="/">
                            <img src='/images/musicomm-logo.png' className="navbar__logo-img" alt="logo" width={120} height={'auto'}/>
                        </Link>
                    </div>
                    <div className="navbar__menu">
                        <ul style={ { listStyle : 'none', display : "flex", flexWrap : 'wrap', margin : 0}  }>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/tienda">Tienda</Link>
                            </li>
                            <li>
                                <Link to="/nosotros">Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__actions">
                        <div className="navbar__actions-login">
                            <Button color="inherit"><PersonIcon /></Button>
                        </div>
                        <CartWidget />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar