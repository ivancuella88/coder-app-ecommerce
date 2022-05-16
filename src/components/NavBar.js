import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {

    const styles = {
        display: 'flex',
        justifyContent : 'space-between',
        alignItems: 'center',
        width : '100%',
        padding : '1rem 0'
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <div className="navbar" style={ styles }>
                    <div className="navbar__logo" style={ {
                            display: 'flex',
                            justifyContent : 'space-between',
                            alignItems: 'center'
                        }} >
                        <img src='./images/musicommerce-logo.png' className="navbar__logo-img" alt="logo" width={40} height={'auto'}/>
                        <h1 style={ { fontSize : '1.5rem', margin : '0 0 0 1rem' } }>Musicommerce</h1>
                    </div>
                    <div className="navbar__menu">
                        <ul style={ { listStyle : 'none', display : "flex", flexWrap : 'wrap' }  }>
                            <li style={ { fontSize : '1rem', margin : '0 0.5rem'} }>
                                <a href="/">
                                    <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>Guitarras</Typography>
                                </a>
                            </li>
                            <li style={ { fontSize : '1rem', margin : '0 0.5rem'} }>
                                <a href="/">
                                    <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>Amplificadores</Typography>
                                </a>
                            </li>
                            <li style={ { fontSize : '1rem', margin : '0 0.5rem'} }>
                                <a href="/">
                                    <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>Bajos</Typography>
                                </a>
                            </li>
                            <li style={ { fontSize : '1rem', margin : '0 0.5rem'} }>
                                <a href="/">
                                    <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>Saxofones</Typography>
                                </a>
                            </li>
                            <li style={ { fontSize : '1rem', margin : '0 0.5rem'} }>
                                <a href="/">
                                    <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>Otros</Typography>
                                </a>
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