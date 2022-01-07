import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const LastStep = ({
    currentStep,
    handleNext,
    handlePrev,
    setTitle,
    setFooter
}) => {
    useEffect(() => {
        setTitle('Last Step Title')
        setFooter(footer)
    }, [])

    const footer = () => (
        <>
            <Button variant="secondary" onClick={handlePrev}>Back</Button>
            <Button variant="secondary" onClick={handleNext}>Finish</Button>
        </>
    )

    return (
        <Container>
            <h1>Last Step</h1>
        </Container>
    )
}

export default LastStep