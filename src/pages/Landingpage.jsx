import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <div className='container my-5'>
      <Row>
        <Col>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}> styLorem ipsum dolor sit amet consectetur, adipisicing elit. Nam animi deleniti error at voluptatibus,
            ullam provident facere esse natus amet et voluptatem magnam commodi sit illum, adipisci sint unde ducimus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo dolores, eveniet fugit fuga esse ea
            rerum nisi voluptatibus exercitationem. Voluptatem,nulla molestiae? Error qxercitationem atque vero.</p>
          <Link to={'/home'}>
            <button className='btn btn-warning mt-5 p-3 rounded'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
          </Link>
        </Col>
        <Col>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{ height: '480px' }} />
        </Col>

        <div className='container'>
          <h3>Features</h3>

          <div className='d-flex align-items-center justify-content-evenly'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Row>
      <div className='container border border-2 border-secondary rounded my-5 p-5'>
        <Row className='d-flex align-items-center justify-content-evenly'>
          <div className='col-md-6'>
            <h3 className='text-warning'>Simple and Powerful</h3>
            <p ><span className='fs-5 fw-bold text-primary'>Play Everything </span><span style={{color:'white'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse aliquid eveniet velit veniam maxime impedit similique, consequuntur est molestiae reiciendis natus magni animi. Adipisci non placeat eveniet iste animi.</span></p>
            <p ><span className='fs-5 fw-bold text-primary'>Play Everything </span><span style={{color:'white'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse aliquid eveniet velit veniam maxime impedit similique, consequuntur est molestiae reiciendis natus magni animi. Adipisci non placeat eveniet iste animi.</span></p>
            <p ><span className='fs-5 fw-bold text-primary'>Play Everything </span><span style={{color:'white'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse aliquid eveniet velit veniam maxime impedit similique, consequuntur est molestiae reiciendis natus magni animi. Adipisci non placeat eveniet iste animi.</span></p>
          </div>
          <div className='col-md-6'> <iframe width="580" height="514" src="https://www.youtube.com/embed/OUKGsb8CpF8" title="Cristiano Ronaldo 50 Legendary Goals Impossible To Forget" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        </Row>
      </div>
    </div>
  )
}
export default Landingpage;