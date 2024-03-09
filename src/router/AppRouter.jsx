import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PublicNavbar from "../components/PublicNavbar";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";

const AppRouter = () => {
  const { renovarToken, user } = useContext(AuthContext);

  useEffect(() => {
    renovarToken();
  }, [renovarToken]);

  return (
    <Router>
      <PublicNavbar />
      <div className="container pt-5">
        <Routes>
          {/* Rutas publicas y privadas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />

          {user.user_name ? (
            <>
              {user.role_name === "ADMIN" && (
                <>
                  <Route path="/admin" element={<AdminPage />} />
                </>
              )}
              {/* Privadas */}
              <Route path="/profile" element={<ProfilePage />} />
            </>
          ) : (
            <>
              {/* Publicas */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
