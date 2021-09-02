import "../App.css";

import FeatureTitle from "../components/FeatureTitle";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import setupFirebaseListeners from "../store/actions/feature/setupFirebaseListeners";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setupFirebaseListeners());
  }, []);

  return (
    <main className="px-4 mx-auto my-5 max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-col flex-wrap max-w-3xl mx-auto mt-10">
        <div className="flex justify-center">{/* <FeatureTitle /> */}</div>
      </div>
    </main>
  );
};

export default App;
