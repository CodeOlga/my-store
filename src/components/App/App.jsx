import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AppRoutes from "../Routes/Routes";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch])

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <AppRoutes />
        <Home />
      </div>

      <Footer />
    </div>
  );
};

export default App;