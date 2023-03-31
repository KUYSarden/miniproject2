
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Blog from '../assets/Blog.png'


const Navbars = () => {
  return (
   <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><span><img className='logo' src={Blog} alt="" /></span></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Projects</Nav.Link>  
          <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Contacts</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Languages
              </NavDropdown.Item><NavDropdown.Item href="#action5">
                Blogs
              </NavDropdown.Item>
             
             
            </NavDropdown>
              
        </Nav>
        <Form className="d-flex top-nav-links">
        <a className='log-in' href="">Log in</a>
        <a className='sign-up' href="">Sign Up</a>

        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </>
  )
}

export default Navbars