import styles from './listProducts.module.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

// criando o componente
export const ListProducts = () => {

    const [data,setData] = useState([])

    // função responsável pela requisição
    const listDataProducts = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const response = await res.json()

        setData(response)
        console.log(res)
    }

    // fazer a requisição logo quando a página é carregada e o componente montado
    useEffect(()=> {
        listDataProducts();
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    {data.map((item, index) => {
                        return (
                            <div className={styles.listProduct} key={index}>
                                {/* item.id que vem da API */}
                               <Link to={`/productsID/${item.id}`} className={styles.link}>
                               <img src={item.category.image} alt='' width={200}/>
                               <h2>{item.title}</h2>
                               <br/>
                               <button className={styles.btn}>Detalhes</button>
                               </Link> 
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

