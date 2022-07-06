import { useEffect, useState } from "react";

const AccountDetails = () => {

    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        let sessionBuyer = localStorage.getItem('musicomm_session_buyer')
        setUserDetails(JSON.parse(sessionBuyer))
    }, [])

    return (
        <>
            <div className="user-details__wrapper mt-4">
                <div className="user-details__group">
                    {
                        userDetails
                        ? (
                            <div className="mb-4">
                                <div className="user-details-label">Nombre</div>
                                <div className="user-details-value">{ userDetails.name }</div>
                            </div>
                        ) 
                        : ''
                    }
                </div>
                <div className="user-details__group">
                    {
                        userDetails
                        ? (
                            <div className="mb-4">
                                <div className="user-details-label">Email</div>
                                <div className="user-details-value">{ userDetails.email }</div>
                            </div>
                        ) 
                        : ''
                    }
                </div>
                <div className="user-details__group">
                    {
                        userDetails
                        ? (
                            <div className="mb-4">
                                <div className="user-details-label">Teléfono</div>
                                <div className="user-details-value">{ userDetails.phone }</div>
                            </div>
                        ) 
                        : ''
                    }
                </div>
            </div>
        </>
    )
}

export default AccountDetails;