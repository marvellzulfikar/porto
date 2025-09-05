import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import '../style/skills.css'

import html from '../assets/html.png'
import js from '../assets/js.png'
import php from '../assets/php.png'
import react from '../assets/react.png'
import figma from '../assets/figma.png'
import mysql from '../assets/mysql.png'
import bootstrap from '../assets/bootstrap.png'
import git from '../assets/git.png'

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title animasi
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        }
      });

      // Text animasi
      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        }
      });

      // Cards animasi (stagger)
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='tech' id='techstack-section'>
      <Container>
        <h2 className='tech-title' ref={titleRef}>
          <strong>Tech Stack</strong>
        </h2>
        <br />

        <p className='tech-text' ref={textRef}>
          I specialize in web development using a modern tech stack that includes front-end, back-end, design, and version control tools. Each technology listed below plays a key role in helping me build responsive, functional, and user-friendly websites.
        </p>

        <Row className='rec-row g-4'>
          {[
            { img: html, title: "HTML5/CSS3", desc: "Create responsive and visually appealing web designs, using modern techniques and best practices." },
            { img: js, title: "Javascript", desc: "Develop websites interactively by enabling dynamic content, user interactions, animations, and real-time updates in the browser." },
            { img: php, title: "PHP", desc: "Server-side scripting language used to build dynamic web pages by handling data, processing forms, and connecting to databases." },
            { img: react, title: "React JS", desc: "JavaScript library for building fast and interactive user interfaces by creating reusable components and efficiently updating the web." },
            { img: figma, title: "Figma", desc: "Web-based design tool used for creating user interfaces, prototypes, and collaborative design workflows in real time." },
            { img: bootstrap, title: "Bootstrap", desc: "Front-end framework that helps you quickly build responsive and mobile-friendly websites using pre-built HTML/CSS, and JavaScript components." },
            { img: git, title: "Git", desc: "Version control system that tracks changes in your code, lets you collaborate with others, and helps manage different versions of a project." },
            { img: mysql, title: "MySQL", desc: "Relational database management system used to store, organize, and manage data for websites and applications." }
          ].map((skill, i) => (
            <Col xs={6} md={3} key={i} ref={el => cardsRef.current[i] = el}>
              <div className='rectangle'>
                <img src={skill.img} alt={skill.title} />
              </div>
              <h1 className='rec-title'>{skill.title}</h1>
              <p className='rec-desc'>{skill.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Skills;
