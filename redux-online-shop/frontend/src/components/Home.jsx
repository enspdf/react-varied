import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="home-container">
      {isLoading && <div>Loading...</div>}
      {error && <p>An error ocurred...</p>}
      <>
        New Arrivals
        <div className="products">
          {data?.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button>Add To Cart</button>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Home;
