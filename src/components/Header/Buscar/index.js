import { Formik, Form, Field } from 'formik';
import {Nav, FormControl, Button} from 'react-bootstrap';
import './style.scss';
import search from "../../../imgs/home/search.svg";
import { useNavigate } from 'react-router-dom';

const Buscar = () => {
  const navigate = useNavigate();

  const handleSubmit = async ({ title }) => {
    navigate(`/produtos/buscar/${title}`);
  };

  return (
    <>
      <Nav className="px-4" style={{ width: "100%" }}>
        <Formik initialValues={{ title: "" }} onSubmit={handleSubmit}>
          <Form
            className="d-flex"
            style={{ height: "3.2rem", width: "100%", maxWidth: "500px" }}
          >
            <FormControl
              as={Field}
              placeholder="Buscar"
              required
              type="search"
              name="title"
              id="title"
              className="me-2"
            />
            <Button type="submit" variant="outline-light" className="m-auto">
              <img className="button" src={search} alt="search" />
            </Button>
          </Form>
        </Formik>
      </Nav>
    </>
  );
};

export default Buscar;