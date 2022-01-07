import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const SecondStep = ({
    currentStep,
    handleNext,
    handlePrev,
    setTitle,
    setFooter,
    formikWrapper
}) => {
    useEffect(() => {
        setTitle('Second Step Title')
        setFooter(footer)
        formikWrapper.setFieldValue('step', currentStep)
    }, [])

    const footer = () => (
        <>
            <Button variant="secondary" onClick={handlePrev}>Back</Button>
            <Button variant="secondary" onClick={handleNext}>Continue</Button>
        </>
    )

    return (
        <Container>
            <h1>Second Step</h1>
            <pre>
                {JSON.stringify(formikWrapper.values, null, 2)}
            </pre>
        </Container>
    )
}

export default SecondStep