import Card from 'react-bootstrap/Card';
import './Card1.css'


// second card containing socials
function TextExample() {
  return (
    <Card className='card1'>
      <Card.Body>
        <Card.Title className='social'>Socials</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text className='cardtxt'>
        You Can Follow Me, Lets Interact And Build Together
        </Card.Text>
        <Card.Link className='icon' href="#"><i class="fa-brands fa-square-facebook"></i></Card.Link>
        <Card.Link className='icon' href="#"><i class="fa-brands fa-linkedin"></i></Card.Link>
        <Card.Link className='icon' href="#"><i class="fa-brands fa-square-x-twitter"></i></Card.Link>
        <Card.Link className='icon' href="#"><i class="fa-brands fa-discord"></i></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;