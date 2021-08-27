import { useDispatch } from "react-redux"
import { login, logout } from '../features/user'

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({ name: 'Name', age: 26, email: 'example@mail.com' }));
                }}>
                Login
            </button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Login