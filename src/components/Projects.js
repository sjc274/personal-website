import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/fetal-health.png";
import projImg2 from "../assets/img/wecare.png";
import projImg3 from "../assets/img/library.svg";


export const Projects = () => {
    const projects = [
        {
            title: <a href="https://github.com/sfu-cmpt340/fetal-health-classification?tab=readme-ov-file" style={{textDecoration: 'none', color: 'inherit'}}>Fetal Health Classification</a>,
            description: <a href="https://github.com/sfu-cmpt340/fetal-health-classification?tab=readme-ov-file" style={{textDecoration: 'none', color: 'inherit'}}>A Machine Learning project to classify fetal health based on cardiotocography data.</a>,
            imgUrl: projImg1,
            category: "Machine Learning"
        },
        {
            title: <a href="https://github.com/sjc274/cmpt276-project-group9-naja-master" style={{textDecoration: 'none', color: 'inherit'}} >WeCare - Android App</a>,
            description: <a href="https://github.com/sjc274/cmpt276-project-group9-naja-master" style={{textDecoration: 'none', color: 'inherit'}}>An Android application to help dementia patients with their medical plans.</a>,
            imgUrl: projImg2,
            category: "Software Application"
        },
        {
            title: <a href="https://github.com/sjc274/Library-Management-System" style={{textDecoration: 'none', color: 'inherit'}}>Library Management System</a>,
            description: <a href="https://github.com/sjc274/Library-Management-System" style={{textDecoration: 'none', color: 'inherit'}}>A web application to manage library resources and user accounts.</a>,
            imgUrl: projImg3,
            category: "Software Application"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>I have worked on a variety of projects, from software application to meachine learning projects. Here are some of my projects.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="">
                            <Nav.Item>
                                <Nav.Link eventKey="first">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Software Application</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Machine Learning</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <br></br>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects.filter(project => project.category === "Software Application").map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        projects.filter(project => project.category === "Machine Learning").map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}