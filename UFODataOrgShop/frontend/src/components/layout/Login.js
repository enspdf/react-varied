import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login } from '../../redux/actions/userAction'

import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const { isAuthenticated, error } = useSelector(state => state.userAuth)
    const history = useHistory()

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            return toast.error("Invalid credentials", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }, [dispatch, isAuthenticated, error])

    const submitHanlder = event => {
        event.preventDefault()
        dispatch(login(email, password))
    }

    const emailHandler = event => setEmail(event.target.value)
    const passwordHanlder = event => setPassword(event.target.value)

    return (
        <main className="form-signin">
            <form onSubmit={submitHanlder}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="username@mail.com"
                        value={email}
                        onChange={emailHandler}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={passwordHanlder}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
            </form>
        </main>
    )
}

export default Login
