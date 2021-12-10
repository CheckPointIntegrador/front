import React, { useCallback, useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import ProductItem from '../../components/ProductItem'
import './style.scss'
import { Container, Row } from 'react-bootstrap';
import bannerProducts from "../../imgs/produtos/bannerProducts.jpg"
import api from '../../services/api';

export default function Products() {
    
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

        const response = await api.get(`/products/category/${categ}`);
        
        setCategoryProducts(response.data);
        
    } catch (error) {
        Swal.fire({
            title: 'Página não encontrada',
            icon: 'error',
            buttonsStyling: false
        })
        }
    }, [navigate, categoryName]);

    useEffect(() => {
        if (categoryName) {
            getCategoryData({ categ: categoryName });
        } 
    }, [ getCategoryData, categoryName])


    return (
        <>
        <Helmet>
          <title>Casa das Plantinhas</title>
        </Helmet>
        <main style={{marginBottom: "120px"}}>
            <h1 style={{position: "absolute", top:"45vh", left: "15vw", fontSize: "50px", color:"#606c38", fontWeight: "400"}}>Todos os produtos</h1>
            <img style={{width: "100%", height: "70vh", objectFit: "cover", marginBottom:"40px"}} src={bannerProducts} alt="bannerProducts" />
            <Row className="d-flex">
                {categoryProducts.map(item =>{
                    return <ProductItem {...item} key={item.id}/>
                }
                    
                )}
            </Row >
        </main>
        </>
    )
}
