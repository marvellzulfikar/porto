import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/hero.css';
import heroLogo from '../assets/hero.png';
import gitHub from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';
import {useTypewriter, Cursor} from "react-simple-typewriter";
import Button from 'react-bootstrap/Button';

function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const buttonsRef = useRef(null);

  const [text] = useTypewriter ({
    words : ['Front-End Developer.', 'Web Developer.', 'UI/UX Enthusiast.'],
    loop : {},
  });

  useEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline();

    tl.from(heroRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    })
    .from(imgRef.current, {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");
  });

  return () => ctx.revert(); // cleanup supaya gak dobel animasi
}, []);

  return (
    <Container className="hero" id='hero-section'>
      <Row className="row h-100 align-items-center">
        <Col sm={7} className="hero-text" ref={heroRef}>
          <h4 className="pretext">HI MY NAME IS,</h4>
          <h1><strong>Muhammad Marvell Zulfikar</strong></h1>
          <h4 className='hero-span'>
              I'm a <span>{text}</span> <Cursor/>
          </h4>
          <p>
            Passionate coding enthusiast who enjoys turning ideas into interactive, 
            responsive, and elegant digital experiences.
          </p>

          <p className='link'> 
            <a href='https://www.linkedin.com/in/marvellz'><img src={linkedin} className="linkedin"/></a>
            <a href='https://github.com/marvellzulfikar'><img src={gitHub} className="github"/></a>
            <a href='https://www.instagram.com/marvell_z/'><img src={instagram} className="instagram"/></a>
            <a href='https://wa.me/+6282279964189'><img src={whatsapp} className="whatsapp"/></a>
          </p>

          <div ref={buttonsRef}>
            <Button className='hero-button'>Download CV</Button>
            <Button className='hero-button2' href='#about-section'>Learn More</Button>
          </div>
        </Col>

        <Col sm>
          <img src={heroLogo} className="heropic" ref={imgRef}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
