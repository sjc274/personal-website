import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleConnectClick = () => {
        onUpdateActiveLink('connect');
        const contactSection = document.getElementById('connect');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> 
            <Container>
                <Navbar.Brand href="#home">
                    <img className="personal-logo" src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jiachenjason/"><img src={navIcon1} alt="LinkedIn" /></a> 
                            <a href="https://github.com/sjc274"><img className="github-icon" src={navIcon2} alt="GitHub" /></a>
                            <a href="https://www.instagram.com/jiachen1789/"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <button className="vvd" onClick={handleConnectClick}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}