import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Home1 from '../assets/Home1.jpg'
import Home2 from '../assets/Home2.jpg'
import Home3 from '../assets/Home3.jpg'
import Home4 from '../assets/Home4.jpg'


const Hero = () => {
  return (
    <div className='home'>
        <div className='home-hero'>
            <h4>The Blog</h4>
            <h1>Writing from our team</h1>
            <p>The latest industry news, interviews, technologies and resources</p>
            <div className='home-body'>
                <div className='inside-home'> 
                <h5>Mini Project 2 . 12 Apr 2023</h5>
                <h3>Ux review presentations</h3>
                <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                <div className='links'>
                    <a href="#Design">Design</a>
                    <a href="">Research</a>
                    <a href="">Presentations</a>
                </div>
                </div>
            </div>
        </div>

        <section id='Design'>
         <div className='home-cards-image'>
        <div>
        <div className='home-cards-image'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Home1} />
      <Card.Body>
        <Card.Title>Design page</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Learn more</Button>
      </Card.Body>
    </Card>
         </div>


         <div className='home-cards-image'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Home2} />
      <Card.Body>
        <Card.Title>Design page</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Learn more</Button>
      </Card.Body>
    </Card>
         </div>
        </div>


         <div>
         <div className='home-cards-image'>      
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Home3} />
      <Card.Body>
        <Card.Title>Design page</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Learn more</Button>
      </Card.Body>
    </Card>
         </div>



         <div className='home-cards-image'>
        
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Home4} />
      <Card.Body>
        <Card.Title>Design page</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Learn more</Button>
      </Card.Body>
    </Card>
         </div>
         </div>


       
          </div>
        </section>
    </div>
  )
}

export default Hero