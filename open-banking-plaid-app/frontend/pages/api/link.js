import withApiErrorHandler from '../../middleware/withApiErrorHandler'
import backendRequest from '../../libs/requests/backendRequest'

const handler = async (req, res) => {
    await backendRequest(req, res, 'http://localhost:8002')
}

export default withApiErrorHandler(handler)
