
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Blog from '../assets/Blog.png'
import { NavLink } from "react-router-dom"


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
         <NavLink to="/" end>Home</NavLink>
          <NavLink to="/Projects" end>Projects</NavLink>
          <NavLink to="Blog" end>
                Blogs
              </NavLink>  
          <NavDropdown title="More" id="navbarScrollingDropdown">                        
           <div className='links-dropdown'>
           <NavLink to="Blog" end>
                About Us
              </NavLink>
              <NavLink to="Blog" end>
                Partners
              </NavLink>
              <NavLink to="Blog" end>
                Languages
              </NavLink>
              <NavLink to="Blog" end>
                Contacts
              </NavLink>
              
           </div>
             
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