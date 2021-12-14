import { Row } from 'react-bootstrap';
import './style.scss'

function Loader() {
    return (
      <Row>
        <div class="snippet">
          <div class="stage">
            <div class="dot-typing"></div>
          </div>
        </div>
      </Row>
    );
}

export default Loader;
