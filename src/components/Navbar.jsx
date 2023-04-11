
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Blog from '../assets/Blog.png'
import { NavLink } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';




const Navbars = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
   <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><span><img className='logo' src={Blog} alt="" /></span></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 m-5"
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
              <NavLink onClick={handleShow}>
                Contacts
              </NavLink>



              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Want to KNOW MORE?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Email us @ : <span>ardenflores0@gmail.com</span></Modal.Body>
        <Modal.Body>Phone#:</Modal.Body>
        <div className='modal-body'>
        <div style={{marginBottom: '5px'}}>
          <input placeholder='Name' type="text" />
        </div>
        <div>
          <textarea placeholder='Message' name="" id="" cols="30" rows="5"></textarea>
        </div>
        </div>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
             


              
              
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