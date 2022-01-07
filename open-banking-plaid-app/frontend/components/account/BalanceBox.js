import { useRouter } from 'next/router'

import nestedObjectCheck from '../../libs/nestedObjectCheck'
import swrRequest from '../../libs/requests/swrRequest'

import BalanceBoxContent from './BalanceBoxContent'
import ErrorItem from '../ErrorItem'
import Loader from '../loader/Loader'

const BalanceBox = () => {
    const router = useRouter()
    const { accountId } = router.query

    const { data: dataBalance, error: errorBalance, loading: loadingBalance } = swrRequest(`/api/balance/${accountId}`)

    if (errorBalance) return <ErrorItem error={errorBalance} />
    if (loadingBalance) return <Loader />

    return (
        <div className="box">
            {nestedObjectCheck(dataBalance, 'accounts[0].balances') && <BalanceBoxContent balanceAccounts={dataBalance.accounts[0]} />}
        </div>
    )
}

export default BalanceBox
