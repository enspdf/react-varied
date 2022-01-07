import withApiErrorHandler from "../../middleware/withApiErrorHandler"
import withHttpOnlyCookie from "../../middleware/withHttpOnlyCookie"

import backendRequest from "../../libs/requests/backendRequest"

const handler = async (req, res) => {
    await backendRequest(req, res, 'http://localhost:8002/access-token', 'DELETE')
}

export default withApiErrorHandler(withHttpOnlyCookie(handler))
