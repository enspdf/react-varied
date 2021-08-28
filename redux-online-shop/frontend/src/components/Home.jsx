import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="home-container">
      <h2>New Arrivals</h2>
      <div className="products"></div>
    </div>
  );
};

export default Home;
