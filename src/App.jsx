import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Certificate from './components/Certificate';

function App() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Skills/>
    <Certificate/>
    <Footer/>
    </>
  )
}

export default App
