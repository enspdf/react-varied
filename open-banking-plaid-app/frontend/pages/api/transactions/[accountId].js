import withApiErrorHandle from "../../../middleware/withApiErrorHandler"
import withHttpOnlyCookie from "../../../middleware/withHttpOnlyCookie"

import backendRequest from "../../../libs/requests/backendRequest"

const handler = async (req, res) => {
    const { accountId } = req.query

    await backendRequest(req, res, `http://localhost:8002/transactions/${accountId}?startDate=2018-11-09&endDate=2021-09-07`)
}

export default withApiErrorHandle(withHttpOnlyCookie(handler))
