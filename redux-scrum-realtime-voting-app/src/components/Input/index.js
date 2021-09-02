import PropTyps from 'prop-types';

const Input = ({ label, name, className, placeholder, onChange, value, disabled }) => {
    const label = label ? (
        <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
        >
            {label}
        </label>
    ) : null;

    return (
        <>
            {/* {label}
            <input
                type="text"
                name={name}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={disabled}
            /> */}
        </>
    )
}

Input.propTypes = {
    label: PropTyps.string.isRequired,
    name: PropTyps.string.isRequired,
    placeholder: PropTyps.string,
    onChange: PropTyps.func,
    value: PropTyps.string.isRequired,
    disabled: PropTyps.bool.isRequired
}

export default Input;