import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthProvider from "./auth/AuthProvider";
import Layout from "./components/layouts/Layout";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
