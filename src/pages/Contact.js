import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { addDoc, collection } from 'firebase/firestore';
import db from '../utils/firebaseConfig'

import { Validate } from '../helpers/Helpers'
import CircularProgress from '@mui/material/CircularProgress';

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
            console.log(userInquiry)
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
                
                {
                    Object.keys(inquiryReceived).length
                    ? 
                    (
                        <div className='order-complete text-center'>
                            <h4>¡Gracias por tu mensaje!</h4>
                            <p>Nos estaremos comunicando con vos a la brevedad</p>
                        </div>
                    )
                    : 
                    (
                        !processing
                        ? 
                        (
                            <>
                                <form className='contact-form' onSubmit={submit}>
                                    <div className='contact-form__group input-container'>
                                        <TextField size="small" onChange={setInputValue} data-rules="required" name="name" label="Nombre" variant="outlined" />
                                    </div>
                                    <div className='contact-form__group input-container'>
                                        <TextField size="small" onChange={setInputValue} data-rules="required|email" name="email" label="Email" variant="outlined" />
                                    </div>
                                    <div className='contact-form__group input-container'>
                                        <TextField size="small" onChange={setInputValue} data-rules="required" name="phone" label="Teléfono" variant="outlined" />
                                    </div>
                                    <div className='contact-form__group input-container'>
                                        <TextField size="large" onChange={setInputValue} data-rules="required" name="message" label="Mensaje" variant="outlined"
                                            placeholder=""
                                            multiline
                                            rows={4}
                                            />
                                    </div>
                                    <div className="text-center">
                                        <Button type="submit" className="mx-auto default-button default-button__black">Consultar</Button>
                                    </div>
                                </form>
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
        </>
    )
}

export default Contact; 