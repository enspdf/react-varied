import { useStore } from "./store";

const wait = async (time) =>
  new Promise((resolve) => setTimeout(() => resolve(true), time));

const useDispatchEmailFlow = () => {
  const [
    setProcessing,
    clearProcessing,
    setButtonText,
    buttonStates,
  ] = useStore((store) => [
    store.setProcessing,
    store.clearProcessing,
    store.setButtonText,
    store.content?.button?.states,
  ]);

  const dispatch = async () => {
    setProcessing();
    setButtonText(buttonStates?.processing);
    await wait(2000);
    setButtonText(buttonStates?.success);
    await wait(1000);
    setButtonText(buttonStates?.initial);
    clearProcessing();
  };
  return dispatch;
};

export { useDispatchEmailFlow };
