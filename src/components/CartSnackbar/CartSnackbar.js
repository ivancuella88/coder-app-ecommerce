import Snackbar from '@mui/material/Snackbar';
import React, { useContext, useEffect, useRef, useState } from 'react';
import CartContext from '../../context/CartContext';

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const CartSnackbar = () =>  {

    const { alreadyInCart  }    = useContext(CartContext)

    const [state, setState] = useState({
            open: false,
            vertical: 'top',
            horizontal: 'center'
    });

    const position = {
        vertical: 'top',
        horizontal: 'center'
    }

    const { vertical, horizontal, open } = state;

    const show = () => {
        setState({ open: true, ...position });
    };

    const hide = () => {
        setState({ ...state, open: false });
    };

    useEffect(() => {
        if(alreadyInCart){
            show()
        }
        else{
            hide()
        }
    }, [alreadyInCart])

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={hide}
                key={vertical + horizontal}
            >
                <Alert severity="warning">Esté producto ya está en tu carrito</Alert>
            </Snackbar>
        </div>
    );
}

export default CartSnackbar