import Link from 'next/link'

import nestedObjectCheck from '../../libs/nestedObjectCheck'
import swrRequest from '../../libs/requests/swrRequest'

import ErrorItem from '../ErrorItem'
import Loader from '../loader/Loader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const BankBox = () => {
    const { data: dataInstitution, error: errorInstitution, loading: loadingInstitution } = swrRequest('/api/institution')

    if (errorInstitution) return <ErrorItem error={errorInstitution} />
    if (loadingInstitution) return <Loader />

    return (
        <Link href='/accounts' passHref>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {nestedObjectCheck(dataInstitution, 'institution.name') && dataInstitution.institution.name}
                    </p>
                    <button className="card-header-icon">
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </button>
                </header>
            </div>
        </Link>
    )
}

export default BankBox
