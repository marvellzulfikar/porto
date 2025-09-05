import Container from 'react-bootstrap/Container';
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import location from '../assets/location.png'
import '../style/footer.css';

function Footer() {
  return (
    <div className="footer">
      <Container>
      
        <div className="footer-content">

          <div className="footer-left">
            <h2>Muhammad Marvell Zulfikar</h2>
            <h3>Contact Info</h3>
            <p><img src={email}/>zulfikarmarvell@gmail.com</p>
            <p><img src={phone}/>+62 822-7996-4189</p>
            <p><img src={location}/>Palembang, Indonesia</p>
          </div>

          <div className="footer-right">
            <h3>Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Certificate</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

        <hr className="divider" />

        <div className="footer-bottom">
          <p className="credit">
            Created with ❤️ by <span>Muhammad Marvell Zulfikar</span>
          </p>
        </div>
      </Container>
    </div>
    
    
    
  )
}

export default Footer
