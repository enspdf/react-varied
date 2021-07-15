import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CenterPiece from '../CenterPiece'

export interface ILoadingProps {
    children: any
    dotType?: string
}

export const Loading = ({ children, dotType }: ILoadingProps) => {
    return (
        <div className="text-center">
            <div className="stage">
                <div className={dotType} />
            </div>
            {children}
        </div>
    )
}

Loading.defaultProps = {
    dotType: 'dot-bricks'
}

export interface ILoadingComponentProps {
    children?: any
    card?: boolean
    dotType?: string
}

export const LoadingComponent = ({ children, card, dotType }: ILoadingComponentProps) => {
    if (card) {
        return (
            <CenterPiece>
                <Card>
                    <CardBody>
                        <Loading dotType={dotType}>{children}</Loading>
                    </CardBody>
                </Card>
            </CenterPiece>
        )
    }

    return <Loading dotType={dotType}>{children}</Loading>
}

LoadingComponent.defaultProps = {
    card: true,
    dotType: 'dot-bricks'
}

export default LoadingComponent
