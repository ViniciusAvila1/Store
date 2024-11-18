import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ListProducts } from "./pages/listProducts";
import { ProductsID } from "./pages/productsID";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          DEV-<strong style={{ color: "black" }}>STORE</strong>
        </h1>
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ListProducts />} />
            <Route path="/products/:id" element={<ProductsID />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
