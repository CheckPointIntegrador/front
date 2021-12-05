import React, {useContext} from 'react'
import ProductItem from './ProductItem'
import { ProductsContext } from '../../context/ProductsContext'
import Header from '../../components/Header'

export default function Products() {
    const {products} = useContext(ProductsContext)

    return (
        <>
        <Header/>
        {products.map(item =>{
            return <ProductItem {...item} key={item.id}/>
        }
            
        )}
        </>
    )
}
