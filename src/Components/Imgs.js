import {Col} from 'reactstrap';
import '../App.css';
function Img(props) {
    return (
    <>
        <Col className="col1 col-sm">
        <img width ="300px" className="home-img img-fluid" alt="lol" src={props.link} />
        </Col><div class="col-md-auto"></div><br/>
    </>
    );
}
  
export default Img;