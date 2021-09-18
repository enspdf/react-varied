import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const LoaderSpinner = () => {
    return <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0}
    />
}

export default LoaderSpinner
