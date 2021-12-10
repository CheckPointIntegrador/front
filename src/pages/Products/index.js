import React, { useCallback, useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import ProductItem from '../../components/ProductItem'
import './style.scss'
import { Row } from 'react-bootstrap';
import bannerProducts from "../../imgs/produtos/bannerProducts.jpg"
import api from '../../services/api';

export default function Products() {
    
    const [products, setProducts] = useState([]);
    const { input } = useParams();
    

    const getData = useCallback(async ({userInput}) => {
        
        try {
            if(userInput !== ""){
                const response = await api.get(`/products/search/${userInput}`);
                setProducts(response.data);
            } else{
                const response = await api.get(`/products`);
                setProducts(response.data);
            }
        
    } catch (error) {
        Swal.fire({
            title: 'Página não encontrada',
            icon: 'error',
            buttonsStyling: false
        })
        }
    }, [])

    useEffect(() => {
        
        if (input) {
            getData({ userInput: input });
            return
        } 
        getData({ userInput: "" });
    }, [getData, input])


    return (
        <>
        <Helmet>
          <title>Casa das Plantinhas</title>
        </Helmet>
        <main style={{marginBottom: "120px"}}>
            <h1 style={{position: "absolute", bottom:"45%", left: "15vw", fontSize: "50px", color:"#606c38", fontWeight: "400"}}>Todos os produtos</h1>
            <img style={{width: "100%", height: "70vh", objectFit: "cover", marginBottom:"40px", objectPosition: "right"}} src={bannerProducts} alt="bannerProducts" />
            <h1 style={{color: "#606C38", margin: "80px 0 25px 70px"}}>
                {input ?  "Resultado da pesquisa" :  "Todos os produtos"}
            </h1>
            <Row className="d-flex">
                {products.map(item =>{
                    return <ProductItem {...item} key={item.id}/>
                }
                    
                )}
            </Row >
        </main>
        </>
    )
}
