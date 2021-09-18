import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    const inlineStyle = {
        top: "0.5rem",
        right: "0.5rem"
    };

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={inlineStyle}>Sale</div>
                <Link to={`/product/${product._id}`}>
                    <img className="card-img-top" src={product.images[0].url} alt={product.name} />
                </Link>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{product.name}</h5>
                        ${product.price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto">
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Product
