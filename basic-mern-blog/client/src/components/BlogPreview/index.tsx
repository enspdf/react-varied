import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody } from 'reactstrap'

export interface IBlogPreviewProps {
    children?: any
    _id: string
    title: string
    headline: string
    author: string
    createdAt: string
    updatedAt: string
}

const BlogPreview = ({ children, _id, title, headline, author, createdAt, updatedAt }: IBlogPreviewProps) => {
    return (
        <Card className="border-0">
            <CardBody className="p-0">
                <Link to={`/blogs/${_id}`} style={{ textDecoration: 'none' }} className="text-primary">
                    <h1>
                        <strong>{title}</strong>
                    </h1>
                    <h3>{headline}</h3>
                    <br />
                </Link>
                {createdAt !== updatedAt ? (
                    <p>
                        Updated by {author} at {new Date(updatedAt).toLocaleDateString()}
                    </p>
                ) : (
                    <p>
                        Posted by {author} at {new Date(createdAt).toLocaleDateString()}
                    </p>
                )}
                {children}
            </CardBody>
        </Card>
    )
}

export default BlogPreview
