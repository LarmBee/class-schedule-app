import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Student/student.css"
import { Link } from "react-router-dom";


function User() {
  
  return (
    <Navbar collapseOnSelect expand="lg md-sm-col-12" style={{backgroundColor: "black"}}>
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <h1 style={{color: 'white', fontSize:"2rem"}}>Ratiba</h1> 
          </Nav>
          <Nav>
          <div className="use">
          <button className="log" style={{width: "8vw",borderRadius:"30px", height: "2vw", fontWeight: "normal"}}><Link to="/">Log Out </Link></button>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );  
}




export default User;
