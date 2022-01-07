import { useState } from 'react'

const Stepper = ({ steps, children }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const isLastStep = currentStep === steps.length - 1

    const handleNext = () => {
        if (isLastStep) return

        setCurrentStep(prevCurrentStep => prevCurrentStep + 1)
    }

    const handlePrev = () => {
        if (currentStep === 0) return

        setCurrentStep(prevCurrentStep => prevCurrentStep - 1)
    }

    return (
        <>
            {children({ step: steps[currentStep], currentStep, isLastStep, handleNext, handlePrev })}
        </>
    )
}

export default Stepper