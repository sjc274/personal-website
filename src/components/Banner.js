import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import headerImg from '../assets/img/header-img.svg';
import selfImg from '../assets/img/self-img.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Web Developer", "AI Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(50);
        }

        if (!isDeleting && updatedText === fullText) {
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updatedText === '') {
            setDelta(150);
            setIsDeleting(false);
            setLoopNum(prevLoopNum => prevLoopNum + 1);
        }
    }

    return (
        <section id="home" className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Personal Website!</span>
                        <h1>{`Hi I'm Jason Sun `}<br></br><span className="wrap">I'm {text}</span></h1>
                        <p>I’m a passionate technology enthusiast with an unquenchable curiosity for exploring the latest innovations and advancements. My drive to learn is matched only by my commitment to excellence, as I continuously strive to produce high-quality outcomes in every project I undertake. Whether it’s diving into new tools, mastering cutting-edge techniques, or staying ahead of industry trends, I am dedicated to pushing boundaries and achieving the best possible results.</p>
                        <button onClick={() => {
                            console.log("connect")
                        }}>Let's Connect! <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="self-img" src={selfImg} alt="Self Img" />
                        <img className="header-img"  src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}