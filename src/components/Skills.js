import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import reactjs from '../assets/img/reactjs.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import javascript from '../assets/img/javascript.svg';
import typescript from '../assets/img/typescript.svg';
import nextjs from '../assets/img/nextjs.svg';
import tailwindcss from '../assets/img/tailwind-css.svg';
import nodejs from '../assets/img/nodejs.svg';
import python from '../assets/img/python.svg';
import cpp from '../assets/img/cpp.svg';
import java from '../assets/img/java.svg';
import rust from '../assets/img/rust.svg';
import haskell from '../assets/img/haskell.svg';
import swift from '../assets/img/swift.svg';
import github from '../assets/img/github.svg';
import git from '../assets/img/git.svg';
import docker from '../assets/img/docker.svg';
import mysql from '../assets/img/mysql.svg';
import mongodb from '../assets/img/mongodb.svg';
import jira from '../assets/img/jira.svg';

import colorSharp from '../assets/img/color-sharp.png';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section id="skills" className="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-title">Skills</div>
                        <div className="skill-bx">
                            <h2>Programming Languages</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item react">
                                    <img src={python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={cpp} alt="Image" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={rust} alt="Image" />
                                    <h5>Rust</h5>
                                </div>
                                <div className="item">
                                    <img src={haskell} alt="Image" />
                                    <h5>Haskell</h5>
                                </div>
                                <div className="item">
                                    <img src={swift} alt="Image" />
                                    <h5>Swift</h5>
                                </div>
                            </Carousel>
                        </div>
                        <div className="skill-bx">
                            <h2>Web Development</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="Image" />
                                    <h5>Typescript</h5>
                                </div>
                                <div className="item react">
                                    <img src={reactjs} alt="Image" />
                                    <h5>React Js</h5>
                                </div>
                                <div className="item react">
                                    <img src={nextjs} alt="Image" />
                                    <h5>Next Js</h5>
                                </div>
                                <div className="item">
                                    <img src={tailwindcss} alt="Image" />
                                    <h5>Tailwind CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>Node Js</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                            </Carousel>
                        </div>
                        
                        <div className="skill-bx">
                            <h2>Tools</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item react">
                                    <img src={git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item react">
                                    <img src={docker} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item react">
                                    <img src={jira} alt="Image" />
                                    <h5>Jira</h5>
                                </div>
                                <div className="item react">
                                    <img src={github} alt="Image" />
                                    <h5>GitHub</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}