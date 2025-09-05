import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/navbar.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container className="nav">
        <Navbar.Brand className="brand" href="#home">
          Marvell.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero-section">Home</Nav.Link>
            <Nav.Link href="#about-section">About Me</Nav.Link>
            <Nav.Link href="#techstack-section">Techstack</Nav.Link>
            <Nav.Link href="#certif-section">Certificate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
