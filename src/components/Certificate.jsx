import { useState, useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import digitalent from '../assets/digitalent.jpg'
import dicoding1 from '../assets/dicoding1.jpg'
import revou from '../assets/revou.jpg'
import dicoding2 from '../assets/dicoding2.jpg'
import sololearn from '../assets/sololearn.jpg'
import progate from '../assets/progate.jpg'
import '../style/certificate.css'

gsap.registerPlugin(ScrollTrigger);

function Certificate() {
  const [fullscreenImg, setFullscreenImg] = useState(null)
  const sectionRef = useRef(null)

  const images = [digitalent, revou, dicoding1, dicoding2, sololearn, progate]

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".certif img"),
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    )
  }, [])

  return (
  <div className='certificate' id='certif-section' ref={sectionRef}>
    <Container>

        <h2 className='certificate-title'>
            <strong>Certificate</strong>
        </h2>

        <br />

        <Row className="card-row">
          {images.slice(0, 3).map((img, idx) => (
            <Col key={idx}>
              <div className="certif">
                <img
                  src={img}
                  alt={`certificate-${idx}`}
                  onClick={() => setFullscreenImg(img)}
                />
              </div>
            </Col>
          ))}
        </Row>

        <Row className="card-row">
          {images.slice(3, 6).map((img, idx) => (
            <Col key={idx}>
              <div className="certif">
                <img
                  src={img}
                  alt={`certificate-${idx + 3}`}
                  onClick={() => setFullscreenImg(img)}
                />
              </div>
            </Col>
          ))}
        </Row>
        
    </Container>

    {/* Fullscreen Overlay */}
    {fullscreenImg && (
      <div className="overlay" onClick={() => setFullscreenImg(null)}>
        <img src={fullscreenImg} alt="fullscreen" />
      </div>
    )}
  </div>
  )
}

export default Certificate
