import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from 'react-bootstrap/esm/Container';
import '../style/about.css';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const quotesRef = useRef(null);
  const authorRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Quotes fade in
      gsap.from(quotesRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: quotesRef.current,
          start: "top 85%",
        }
      });

      // Author fade in setelah quotes
      gsap.from(authorRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: authorRef.current,
          start: "top 85%",
        }
      });

      // Intro text muncul dengan stagger (paragraf naik pelan-pelan)
      gsap.from(introRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='about-section' id="about-section">
      <div className='about-bg'>
        <Container>

          <div className='quotes' ref={quotesRef}>
            <h3>"Ideas don't come out fully formed, they only become clearer as you work on them"</h3>
          </div>

          <div className='quotes-author' ref={authorRef}>
            <h4>- Mark Zuckerberg</h4>
          </div>

          <p className='intro' ref={introRef}>
            Hi, I'm Muhammad Marvell Zulfikar — a graduate from Faculty of Computer Science of Sriwijaya University. Developing a scalable, efficient, and user-friendly web system has been my passion since I was a college stundent. I love turning complex problems into clean and reliable solutions. My expertise lies in front-end development and UI/UX Design. 
            I’m driven by curiosity and continuous learning. Whether it’s building a website or designing the interface, I enjoy digging into the "why" and "how" behind the code.
            I'm currently seeking opportunities where I can contribute to meaningful projects, collaborate with talented teams, and keep growing as a developer.
          </p>

        </Container>
      </div>
    </div>
  )
}

export default About;
