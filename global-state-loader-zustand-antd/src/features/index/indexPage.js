import { Button } from "antd";
import useLoading from "../shared/hooks/useLoading";

const IndexPage = () => {
  const { loader, showLoading, hideLoading } = useLoading();

  return (
    <>
      <Button type="primary" onClick={showLoading}>
        Show Loading
      </Button>
      <Button type="dashed" onClick={hideLoading}>
        Hide Loading
      </Button>
      {loader}
    </>
  );
};

export default IndexPage;
