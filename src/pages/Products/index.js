import React, {useContext, useCallback, useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import ProductItem from './ProductItem'
import { ProductsContext } from '../../context/ProductsContext'
import './style.scss'
import { Container } from 'react-bootstrap';
import bannerProducts from "../../imgs/produtos/bannerProducts.jpg"
import Card from "../../components/Card/index"

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
          <title>Casa das Plantinhas</title>
        </Helmet>
        <main style={{marginBottom: "120px", height:"100vh"}}>
            <h1 style={{position: "absolute", top:"45vh", left: "15vw", fontSize: "50px", color:"#606c38", fontWeight: "400"}}>Todos os produtos</h1>
            <div id="bannerProducts"></div>
            {/* <img style={{width: "100%", height: "70vh", objectFit: "cover", marginBottom:"40px"}} src={bannerProducts} alt="bannerProducts" /> */}
            <Container className="d-flex flex-wrap">
                <Card title="teste" price="R$12,00" />
                {categoryProducts.map(item =>{
                    return <ProductItem {...item} key={item.id}/>
                }
                    
                )}
            </Container >
        </main>
        </>
    )
}
