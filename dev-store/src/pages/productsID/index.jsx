import styles from './productsID.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ProductsID = () => {

    const [itemID, setItemID] = useState([])
    const {id} = useParams()

    const getItemId = async () => {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        const response = await res.json()
        setItemID(response)
    }

    useEffect(() => {
        getItemId()
    })

    return (
        <>
            <h3>
                Listar item específico
            </h3>
            <div>
                {/* não precisa do map pois quero apenas um único item, não precisa percorrer tudo */}
                <img src={itemID.images} alt='' width={200} />
                <h2>{itemID.title}</h2>
                <strong>R$: {itemID.price}</strong>
                <p>{itemID.description}</p>
            </div>
        </>
    )
}