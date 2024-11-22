import styles from "./listProducts.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// criando o componente
export const ListProducts = () => {
  const [data, setData] = useState([]);

  // função responsável pela requisição
  const listDataProducts = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const response = await res.json();

    setData(response);
  };

  // fazer a requisição logo quando a página é carregada e o componente montado
  useEffect(() => {
    listDataProducts();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.listProducts}>
          {data.map((item, index) => {
            return (
              <div className={styles.listCards} key={index}>
                {/* item.id que vem da API */}
                <Link to={`/products/${item.id}`} className={styles.link}>
                  <img src={item.images[0]} alt="" width={200} />
                  <h2>{item.title}</h2>
                  <strong>${item.price}</strong>
                  <br />
                  <button className={styles.btnDetails}>
                    <span>More details</span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
