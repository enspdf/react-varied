import { useState } from 'react'

const useCalculator = (defaultValue = 0) => {
    const [currentValue, setCurrentValue] = useState(defaultValue)

    const multiply = (a, b) => {
        const result = a * b;

        setCurrentValue(result)
    }

    return {
        currentValue,
        multiply
    }
}

export default useCalculator