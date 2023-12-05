import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Logo from '../Assets/Gomycode-logo.webp'
import './Card2.css'


// third card containing school
function KitchenSinkExample() {
  return (
    <Card >
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <img className='logod' src={Logo} alt='img'/>
      <Card.Body>
        <Card.Title className='cardtitle2'>GOMYCODE</Card.Title>
        <Card.Text className='cardtext2'>
          Gomycode : 
            Launch your coding career
            Ready to launch your career in web development? 
            Our web school program provides a comprehensive curriculum that covers the latest trends in front-end and back-end web development. <br /> 
            Learn from skilled professionals and build real-world projects that will make you stand out in the job market.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Full Stack Programming</ListGroup.Item>
        <ListGroup.Item>Data Science</ListGroup.Item>
        <ListGroup.Item>UI/UX</ListGroup.Item>
      </ListGroup>
      <Card.Body >
        <Card.Link className='cardlink' href="#">Lekki Hacker Space,</Card.Link>
        <Card.Link className='cardlink' href="#">Ikeja Hacker Space</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;