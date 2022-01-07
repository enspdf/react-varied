import { useEffect, useState } from 'react'

import Error from 'next/error'

import apiRequest from '../../libs/requests/apiRequest'
import nestedObjectCheck from '../../libs/nestedObjectCheck'

import LinkPlaid from './LinkPlaid'
import Loader from '../loader/Loader'

function LoginPlaid() {
    const [linkToken, setLinkToken] = useState(null)
    const [isLinkTokenLoading, setLinkTokenLoading] = useState(true)
    const [error, setError] = useState(null)

    const generateToken = async () => {
        try {
            setLinkTokenLoading(true)
            const linkTokenData = await apiRequest('/api/link')
            if (
                linkTokenData.status_code >= 200
                && linkTokenData.status_code < 300
                && linkTokenData.link_token
            ) {
                setLinkToken(linkTokenData.link_token)
                setError(null)
            } else {
                setLinkToken(null)
                setError(linkTokenData)
            }
            setLinkTokenLoading(false)
        } catch (error) {
            setLinkToken(null)
            setError(error)
            setLinkTokenLoading(false)
            console.error(error)
        }
    }

    useEffect(() => {
        if (linkToken === null) {
            generateToken()
        }
    }, [])

    if (isLinkTokenLoading === true) return <Loader />

    if (error || !linkToken) return <Error statusCode={nestedObjectCheck(error, 'status_code') ? error.status_code : 500} />

    return (
        <LinkPlaid linkToken={linkToken} />
    )
}

export default LoginPlaid
