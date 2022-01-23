import './App.css';
import {Container,Row,Col} from 'reactstrap';
import { ImYoutube2 } from 'react-icons/im';
import {GrInstagram} from 'react-icons/gr';
import Img from "./Components/Imgs";
function App() {
  return (
    <div className="home">
    <Container className="home-1">
    <div className="home-2">
      <Row className="justify-content-md-center">
        <Col style={{padding:"10px"}} className="col1 col-sm">
            <div class="text-center">
                <img width ="250px" src="/assets/bw.jpg" class="img-fluid home-img rounded" alt="Bright Whisper"/>
                <h4>Bright Whisper</h4>
            </div>
        </Col>
        <div class="col-md-auto"></div>
        <Col style={{padding:"20px"}} className="col1 col-sm">I'm Bright Whisper and I'm very into warrior cats! I recently started animating and drawing them and immediately fell in love in it :)<br/>
        <a href="https://youtube.com/channel/UCkopGOu9zE0BBnsphLdc0QA" target="_blank" rel="noreferrer"><ImYoutube2 size="70px"/></a><span style={{paddingRight:"5px"}}></span>
        <a href="https://www.instagram.com/bright_whisper/" target="_blank" rel="noreferrer"><GrInstagram size="30px"/></a>
        </Col>
      </Row>
    </div><br/><h4 align="center">Gallery</h4>
    <Row className="text-center justify-content-md-center">
       <Img link="/assets/img/1.jpg"/>
       <Img link="/assets/img/2.jpg"/>
       <Img link="/assets/img/3.jpg"/>
       <Img link="/assets/img/4.jpg"/>
    </Row>
    </Container>
    </div>
  );
}

export default App;