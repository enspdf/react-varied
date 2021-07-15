import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import logging from '../../config/logging'
import UserContext from '../../context/user'

export interface IAuthRouteProps {
    children?: any
}

const AuthRoute = ({ children }: IAuthRouteProps) => {
    const { user } = useContext(UserContext).userState

    if (user._id === '') {
        logging.info('Unathorized, redirecting ...')

        return <Redirect to="/login" />
    } else {
        return <>{children}</>
    }
}

export default AuthRoute
