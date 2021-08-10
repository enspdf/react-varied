import { memo } from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, label }) => (
    <button onClick={onClick}>{label}</button>
)

Button.defaultProps = {
    onClick: () => { },
    label: 'Button'
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default memo(Button)