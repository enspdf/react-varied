import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const options = [
    { id: 1, value: 'opt-1', label: 'Option 1' },
    { id: 2, value: 'opt-2', label: 'Option 2' },
    { id: 3, value: 'opt-3', label: 'Option 3' },
    { id: 4, value: 'opt-4', label: 'Option 4' },
]

const FirstStep = ({
    currentStep,
    handleNext,
    setTitle,
    setFooter,
    formikWrapper
}) => {
    useEffect(() => {
        setTitle('First Step Title')
        setFooter(footer)
        formikWrapper.setFieldValue('step', currentStep)
    }, [])

    const footer = (
        <Button
            variant="secondary"
            onClick={handleNext}
        // disabled={!Object.keys(formikWrapper.errors).length > 0}
        >
            Continue
        </Button>
    )

    return (
        <Container style={{ margin: '20px 0px' }}>
            <Form.Group>
                <Form.Label>Purpose</Form.Label>
                <Form.Control
                    name="purpose"
                    type="text"
                    placeholder="Purpose"
                    value={formikWrapper?.values?.purpose ?? ''}
                    onChange={event => formikWrapper.setFieldValue('purpose', event.target.value)}
                    onBlur={() => formikWrapper.setFieldTouched('purpose', true)}
                    isValid={formikWrapper.touched.purpose && !formikWrapper.errors.purpose}
                    isInvalid={formikWrapper.touched.purpose && !!formikWrapper.errors.purpose}
                />
                <Form.Control.Feedback type="invalid">
                    {formikWrapper.errors.purpose}
                </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Select
                    name='type'
                    placeholder='Select'
                    value={formikWrapper?.values?.type ?? ''}
                    onChange={({ target }) => formikWrapper.setFieldValue('type', target.value)}
                    onBlur={() => formikWrapper.setFieldTouched('type', true)}
                    isValid={formikWrapper.touched.type && !formikWrapper.errors.type}
                    isInvalid={formikWrapper.touched.type && !!formikWrapper.errors.type}
                >
                    <option key={0} value=''>Select</option>
                    {options.map(option => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {formikWrapper.errors.type}
                </Form.Control.Feedback>
            </Form.Group>
        </Container>
    )
}

export default FirstStep