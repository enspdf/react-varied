import { setCookie } from 'nookies'

export default function addAccessToken(res, accessToken) {
    return setCookie({ res }, 'accessToken', accessToken, { httpOnly: true })
}