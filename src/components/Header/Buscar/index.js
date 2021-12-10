import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {Nav, FormControl, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

import api from '../../../services/api';
import './style.scss';
import search from "../../../imgs/home/search.svg";

const Buscar = () => {
  const [data, setData] = useState([]);

  const handleSubmit = async ({ title }) => {
    try {
      const response = await api.get(`/products`);
      const responseFilter = response.data.filter(prod => prod.title.includes(title) || prod.category.includes(title) ?  prod : "")
        
      setData(responseFilter);
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

    return (
      <>
          <Formik initialValues={{ title: '' }} onSubmit={handleSubmit}>
            <Form
            className="d-flex"
            style={{ width: "100%", maxWidth: "500px" }}
            >
              <Field placeholder="Insira o nome do usuário" required type="text" name="title" id="title" className="form-control" />
              <Button type="submit" variant="primary" className="my-3">Pesquisar</Button>
            </Form>
          </Formik>
          {console.log(data)}


          {/* <Nav style={{ width: "100%" }}>
              <Form
                className="d-flex"
                style={{ width: "100%", maxWidth: "500px" }}
              >
                <FormControl
                  type="search"
                  placeholder="Insira o nome do produto"
                  className="me-2"
                  aria-label="Buscar"
                />
                <Button variant="outline-light">
                  <img className= "button" src={search} alt="search" />
                </Button>
              </Form>
    </Nav> */}

       <h1>OI</h1>
      </>
    );
  }

export default Buscar;