import React, { useCallback, useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router'
import './style.scss'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import ProductItem from '../../components/ProductItem'
import { Row } from 'react-bootstrap';
import api from '../../services/api';
import imageSuculenta from '../../imgs/home/categoriaSuculenta.jpg'
import imageCacto from '../../imgs/home/categoriaCacto.jpg'
import imageSamambaia from '../../imgs/home/categoriaSamambaia.jpg'
import imageFlores from '../../imgs/home/categoriaFlores.jpg'
import imageJardinagem from '../../imgs/home/categoriaJardinagem.jpg'

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

    const bannerCategorys = {
        "suculentas": {
            image: imageSuculenta,
            message: "Se tem uma plantinha ótima para cultivar, é a suculenta. Pertencentes à uma espécie com diversas famílias diferentes, elas são super adaptáveis a qualquer tipo de ambiente. Sua praticidade e versatilidade deixam a decoração muito mais sofisticada, tanto em áreas externas como internas, além de contribuir com a adição de aconchego ao espaço."
        },
        "cactos": {
            image: imageCacto,
            message: "Os cactos são plantas suculentas. Isso significa que têm tecidos grossos, com capacidade para captar e reter grandes volumes de água. Ao contrário de muitas plantas, os cactos não têm raízes profundas. Em vez disso, suas raízes se distribuem perto da superfície do solo. São muito utilizados para decoração doméstica, em razão de sua beleza e facilidade de cultivo."
        },
        "samambaias": {
            image: imageSamambaia,
            message: "As samambaias são plantas das mais antigas da face da Terra. Estas são plantas que não produzem sementes nem flores. Geralmente, as samambaias gostam de meia sombra e umidade no ar razão pela qual são criadas dentro das residências. São fáceis de cuidar e deixam a casa com uma aparência mais aconchegante."
        },
        "flores": {
            image: imageFlores,
            message: "Flores na decoração da casa é a certeza de um ambiente harmonioso e confortável, deixam o lar mais alegre e proporcionam a sensação de bem-estar com suas cores e aromas, elas também deixam o projeto muito mais bonito esteticamente e, inclusive, podem ser aquele toque final que estava faltando no cômodo. Aqui na Casa das Plantinhas você encontra as flores mais lindas e fáceis de cuidar."
        },
        "jardinagem": {
            image: imageJardinagem,
            message: "Nossas plantinhas precisam de alguns cuidados, além da rega específica para sua espécie, e os itens essenciais você encontra aqui na Casa das Plantinhas. Use com cuidado para não comprometer suas platinhas, existe regras e instruções para usar cada utensilío"
        }
    }


    return (
        <>
        <Helmet>
          <title>Casa das Plantinhas</title>
        </Helmet>
        <main style={{marginBottom: "120px"}}>
            <div style={{width: "80%", height:"250px", margin:"0 auto"}} className='banner d-flex'>
                <img style={{width:"40%", height: "100%", borderRadius: "30px", objectFit: "cover", minWidth: "200px"}} src={bannerCategorys[categoryName].image} alt="categoria"/>
                <p className="bannerCategoryMessage justify-content-center">{bannerCategorys[categoryName].message}</p>
            </div>
            <h1 style={{color: "#606C38", margin: "80px 0 25px 70px"}}>{categoryName[0].toUpperCase() + categoryName.slice(1)} disponiveis</h1>
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
