import nestedObjectCheck from '../../libs/nestedObjectCheck'
import swrRequest from '../../libs/requests/swrRequest'

import Account from './Account'
import ErrorItem from '../ErrorItem'
import LoaderSite from '../loader/LoaderSite'

const Accounts = () => {
    const { data: dataAccounts, error: errorAccounts, loading: loadingAccounts } = swrRequest('/api/accounts')

    if (errorAccounts) return <ErrorItem error={errorAccounts} />
    if (loadingAccounts) return <LoaderSite />

    return (
        <div className="columns is-multiline is-variable">
            {nestedObjectCheck(dataAccounts, 'accounts') && dataAccounts.accounts.map(account => <Account
                key={account.account_id}
                id={account.account_id}
                name={account.name}
                official_name={account.official_name}
                type={account.type}
                subtype={account.subtype}
                available_balance={nestedObjectCheck(account, 'balances.available') ? account.balances.available : null}
                current_balance={nestedObjectCheck(account, 'balances.current') ? account.balances.current : null}
                currency={nestedObjectCheck(account, 'balances.iso_currency_code') ? account.balances.iso_currency_code : null}
                limit={nestedObjectCheck(account, 'balances.limit') ? account.balances.limit : null}
            />)}
        </div>
    )
}

export default Accounts
