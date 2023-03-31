import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbars = () => {
  return (
   <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Blog logo</Navbar.Brand>
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
              </NavDropdown.Item>
             
             
            </NavDropdown>
              
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </>
  )
}

export default Navbars