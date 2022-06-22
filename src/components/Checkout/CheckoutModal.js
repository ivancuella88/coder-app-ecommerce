import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import CheckoutForm from './CheckoutForm';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4
};

const CheckoutModal = () => {

  const [modalState, setModalState] = useState(false);
  const  handleModal = (open) => setModalState(open);

  return (
    <>
      <Button onClick={ () => { handleModal(true)} } className="default-button card-item__button card-item__cart-link">
          <span>Finalizar compra</span>
      </Button>  
      <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalState}
            onClose={ () => { handleModal(false)}}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
        >
        <Fade in={modalState}>
            <div className="checkout-modal bg-white" style={styleModal}>
                <CheckoutForm />
            </div>
        </Fade>
      </Modal>
    </>
  );
}

export default CheckoutModal;