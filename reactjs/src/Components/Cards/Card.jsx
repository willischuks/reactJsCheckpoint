import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profilePhoto from '../Assets/2photo.jpeg'
import './Card.css'


// first card containing profile
function CardExample() {
  return (
    <Card className='card'>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <img src = {profilePhoto} alt='img' />
      <Card.Body>
        <Card.Title className='cardtitle'>Godswill O. Egboh</Card.Title>
        <Card.Text className='cardtext'>
          Godswill O.Egboh is an aspiring software developer. Well versed in MERN ( MongoDB, Express, React, Node). An Hardworking student who is eager to learn
        </Card.Text>
        <Button className='cardbtn' variant="primary"  href='#'>Contact Me</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample;