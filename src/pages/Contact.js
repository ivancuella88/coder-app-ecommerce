import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { addDoc, collection } from 'firebase/firestore';
import db from '../utils/firebaseConfig'

import { Validate } from '../helpers/Helpers'
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

const Contact = () => {

    const [inquiry, setInquiry]             = useState({})
    const [processing, setProcessing]       = useState(false)
    const [inquiryReceived, setInquiryReceived] = useState({})

    const setInputValue = (e) => {
        setInquiry({...inquiry, [e.target.name] :  e.target.value})
    }

    const submit =  (e) => {

        e.preventDefault()

        let valid = Validate(e)
        if(valid){

            setProcessing(true)

            inquiry.date        = new Date().toLocaleString('es-ES');

            const userInquiry = inquiry
            setInquiry(userInquiry)
            saveInquiry(userInquiry)
        }
        
    }

    const saveInquiry = async (userInquiry) => {
        const firebaseOrders    = collection(db, 'inquiries')
        const orderDoc     = await addDoc(firebaseOrders, userInquiry)
        setProcessing(false)
        setInquiryReceived(orderDoc)
    }

    return (
        <>
            <div className="main-content container">
                <h1 className="heading">Contactanos</h1>
                <div className="mx-auto max-w-screen-xs">
                    <div className="w-full mb-4 text-center">
                        <p><strong>Teléfono:</strong> 4535-7968</p>
                        <p><strong>Whatsapp:</strong> <a href="https://wa.me/1155606590" title="Enviar whatsapp a 15-5560-6590">15-5560-6590</a></p>
                        <div className="flex justify-center items-center contact__social-icons">
                            <a href="https://www.facebook.com/" className="ml-2 mr-2" title="Facebook" target="_blank">
                                <img src={`/images/facebook-icon.svg`} alt="Facebook" width="24" height="24"/>
                            </a>
                            <a href="https://www.instagram.com/" className="ml-2 mr-2" title="Instagram" target="_blank">
                                <img src={`/images/instagram-icon.svg`} alt="Instagram" width="24" height="24"/>
                            </a>
                        </div>
                    </div>
                    {
                        Object.keys(inquiryReceived).length
                        ? 
                        (
                            <div className='order-complete text-center py-4'>
                                <h4>¡Gracias por tu mensaje!</h4>
                                <div className="mb-4">
                                    <p>Nos estaremos comunicando con vos a la brevedad</p>
                                </div>
                                <div className="mb-4">
                                    <Link to={'/tienda'}>
                                        <Button className="button default-button default-button__black">
                                            Ir a la tienda
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )
                        : 
                        (
                            !processing
                            ? 
                            (
                                <>   
                                    <div className="">
                                        <form className='contact-form' onSubmit={submit}>
                                            <div className='contact-form__group input-container mb-3'>
                                                <TextField size="small" className='w-full' onChange={setInputValue} data-rules="required" name="name" label="Nombre" variant="outlined" />
                                            </div>
                                            <div className='contact-form__group input-container  mb-3'>
                                                <TextField size="small" className='w-full' onChange={setInputValue} data-rules="required|email" name="email" label="Email" variant="outlined" />
                                            </div>
                                            <div className='contact-form__group input-container  mb-3'>
                                                <TextField size="small" className='w-full' onChange={setInputValue} data-rules="required" name="phone" label="Teléfono" variant="outlined" />
                                            </div>
                                            <div className='contact-form__group input-container  mb-3'>
                                                <TextField size="large" className='w-full' onChange={setInputValue} data-rules="required" name="message" label="Mensaje" variant="outlined"
                                                    placeholder=""
                                                    multiline
                                                    rows={4}
                                                    />
                                            </div>
                                            <div className="text-center">
                                                <Button type="submit" className="mx-auto default-button default-button__black">Consultar</Button>
                                            </div>
                                        </form>
                                    </div>
                                </>
                            )
                            : (
                                <div className='loading__container'>
                                    <CircularProgress />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Contact; 