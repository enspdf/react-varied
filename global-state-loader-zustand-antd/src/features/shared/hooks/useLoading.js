import useLoadingStore from "../store/useLoadingStore";
import Loading from "../components/Loading";

const useLoading = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);

  return { loader: isLoading ? <Loading /> : null, showLoading, hideLoading };
};

export default useLoading;
