import { useState } from 'react'
import { useFormik } from 'formik'

import Modal from 'react-bootstrap/Modal'

import Stepper from '../Stepper'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import LastStep from './LastStep'

const steps = [
    { content: FirstStep },
    { content: SecondStep },
    { content: LastStep }
]

const ModalSteps = ({ show, hide }) => {
    const [title, setTitle] = useState(null)
    const [footer, setFooter] = useState(null)
    const formikWrapper = useFormik({
        initialValues: {
            step: 0
        },
        validate: values => {
            const errors = {}

            if (values.step === 0) {
                if (!values.purpose || values.purpose === '') {
                    errors.purpose = 'Purpose Required'
                }

                if (!values.type || values.type === '') {
                    errors.type = 'Type Required'
                }
            }

            return errors
        }
    })

    return (
        <Modal show={show} onHide={hide} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Stepper steps={steps}>
                {({ step, currentStep, handleNext, handlePrev }) => (
                    <step.content
                        currentStep={currentStep}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        setTitle={setTitle}
                        setFooter={setFooter}
                        formikWrapper={formikWrapper}
                    />
                )}
            </Stepper>
            {/* {footer && footer()} */}
            {footer && <Modal.Footer>{footer}</Modal.Footer>}
        </Modal>
    )
}

export default ModalSteps;