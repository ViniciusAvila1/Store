import styles from "./productsID.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export const ProductsID = () => {
  const [itemID, setItemID] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  const getItemId = async () => {
    setLoaded(true);
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const response = await res.json();
      setItemID(response);
    } catch (error) {
      console.error("Error searching for product:", error);
    } finally {
      setLoaded(false);
    }
  };

  useEffect(() => {
    getItemId();
  }, [id]);

  return (
    <>
      {loaded && <h3>Hold on...</h3>}
      {itemID && itemID.images ? (
        <ul className={styles.ul}>
          <div className={styles.info}>
            <img src={itemID.images[0]} alt={itemID.title} />
            <h2>Product: {itemID.title}</h2>
            <strong>Price: {itemID.price}</strong>
            <h3>Category: {itemID.category.name}</h3>
            <p>
              <strong>Description:</strong> {itemID.description}
            </p>

            <Link
              className={styles.backBtn}
              title="Back to products list"
              to={"/"}
            >
              <TiArrowBack />
              Back
            </Link>
          </div>
        </ul>
      ) : (
        // tratamento de erro
        !loaded && <h3>Product not found.</h3>
      )}
    </>
  );
};
