import { Button } from "antd";
import SuperModal from "../components/SuperModal";

const CallbackPage = ({ renderTrigger, ...props }) => {
  return (
    <>
      <SuperModal
        renderTrigger={({ setIsVisible }) => (
          <Button onClick={() => setIsVisible(true)}>Hi</Button>
        )}
      />
    </>
  );
};

export default CallbackPage;
