import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet'

import { getProducts } from '../../redux/actions/productsAction';

import Product from "../Product";
import LoaderSpinner from './LoaderSpinner';

const Content = () => {
    const dispatch = useDispatch()
    const { loading, products, error } = useSelector(state => state.products)

    useEffect(() => {
        if (error) {
            return toast.error("An expected error ocurred", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts())
    }, [dispatch, error])

    const productsDiv = products?.map(product => <Product key={product._id} product={product} />)

    return (
        <section className="py-5">
            <Helmet>
                <title>UFO Data Shop</title>
                <meta name="description" content="UFO Data Shop" />
            </Helmet>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {loading ? <LoaderSpinner /> : productsDiv}
                </div>
            </div>
        </section>
    );
}

export default Content