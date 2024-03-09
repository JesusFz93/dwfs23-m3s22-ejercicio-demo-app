import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";
import ProductState from "./context/ProductState";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// Afcy7ky5GsxDB2dny6K3uVDzOKM0fEqEPZQ8BV0MMticjIJJkJKDVRzllf4bd1KtYR-WC_MUk49YwmdL
const App = () => {
  return (
    <>
      <AuthState>
        <PayPalScriptProvider
          options={{
            clientId:
              "Afcy7ky5GsxDB2dny6K3uVDzOKM0fEqEPZQ8BV0MMticjIJJkJKDVRzllf4bd1KtYR-WC_MUk49YwmdL",
          }}
        >
          <ProductState>
            <AppRouter />
          </ProductState>
        </PayPalScriptProvider>
      </AuthState>
    </>
  );
};

export default App;
