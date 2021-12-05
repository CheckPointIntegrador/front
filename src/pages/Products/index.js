import React, {useContext, useCallback, useState, useEffect} from 'react'
import ProductItem from './ProductItem'
import { ProductsContext } from '../../context/ProductsContext'
import Header from '../../components/Header'
import { useParams, useNavigate} from 'react-router'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

export default function Products() {
    const {products} = useContext(ProductsContext)
    
    const [categoryProducts, setCategoryProducts] = useState([]);
    const { categoryName } = useParams();
    const navigate = useNavigate();
    

    const getCategoryData = useCallback(async ({ categ }) => {
        //(essa parte é quando for linkar com o botao de pesquisa)
        // if (categoryName !== categ && categ !== '') {
        // navigate(`/${categ}`);
        // return;
        // }
        try {
        //(essa parte quando estivermos puxando do backend)
        // const response = await api.get(`/${categ}`);
        // setCategory(response.data);
        setCategoryProducts(products.filter(item => item.category === categ))
        } catch (error) {
        Swal.fire({
            title: error.response.status,
            icon: 'error',
            text: error.response.data.message
        })
        }
    }, [navigate, categoryName, products]);

    useEffect(() => {
        if (categoryName) {
            getCategoryData({ categ: categoryName });
        } 
    }, [ getCategoryData, categoryName, products])


    return (
        <>
        <Helmet>
          <title>Casa das Plantinhas | {categoryName} </title>
        </Helmet>
        <Header/>
        {categoryProducts.map(item =>{
            return <ProductItem {...item} key={item.id}/>
        }
            
        )}
        </>
    )
}
