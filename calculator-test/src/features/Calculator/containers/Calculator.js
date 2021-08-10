import { useState } from 'react'
import Button from '../../shared/components/Button'
import useCalculator from '../hooks/useCalculator'

const Calculator = () => {
    const [values, setValues] = useState({ fv: 0, sv: 0 })
    const { currentValue, multiply } = useCalculator(0)

    return (
        <>
            <label>Result: {currentValue}</label>
            <input name="fv" value={values.fv} onChange={(event) => setValues({ ...values, fv: event.target.value })} />
            <input name="sv" value={values.sv} onChange={(event) => setValues({ ...values, sv: event.target.value })} />
            <Button onClick={() => multiply(values.fv, values.sv)} label="Multiply" />
        </>
    )
}

export default Calculator