import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import burgercode from "../assets/img/Burger-Code.jpg";
import travelAgency from "../assets/img/Travel-Agency.jpg";
import responsiveform from "../assets/img/Responsive-Form.png";
import snakegame from "../assets/img/snake-game.png";
import angularQuiz from "../assets/img/QuizAppInAngular.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';







export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,


    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];


  const projects2 = [
    {
      title: "Burger Code",
      description: "Click to see the website",
      imgUrl: burgercode,
      link: "https://lordmaos.github.io/Burgercode.github.io/",

    },
    {
      title: "Travel Agency",
      description: "Click to see the website",
      imgUrl: travelAgency,
      link: "https://lordmaos.github.io/TravelAgency.github.io/",
    },
    {
      title: "Responsive Form",
      description: "Click to see the website",
      imgUrl: responsiveform,
      link: "https://lordmaos.github.io/JQueryValidation.github.io/",
    },
    {
      title: "Snake game ",
      description: "Click to play",
      imgUrl: snakegame,
      link: "https://lordmaos.github.io/SnakeGame.github.io/",
    },
    {
      title: "Angular Quiz",
      description: "Click to start",
      imgUrl: angularQuiz,
      link: "https://lordmaos.github.io/AngularQuiz.github.io/",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,

    // },
  ];




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A Showcase of my projects and my abilities.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Network</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Programming</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="third">
                        {/* <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })

                          }

                        </Row> */}

<Row>

<div style={{
  display: 'flex',
  flexDirection: 'row',
  width : '100%',
  //justifyContent: "space-between",
 
}}>
<iframe
    style={{
      width: '300px',
      height: '325px',
      marginRight: '50px'
    }}
    src="https://www.youtube.com/embed/SLZ0-NkYSsk"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

 <iframe
    style={{
      width: '300px',
      height: '325px',
      marginRight: '50px'
    }}
    src="https://www.youtube.com/embed/KIIBMeLS0h0"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

</div>



</Row>

 






                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                        {/* <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row> */}

<Row>
<div style={{
  display: 'flex',
  flexDirection: 'row',
  width : '100%',
  justifyContent: "space-between",
 
}}>
  <iframe
    style={{
      width: '300px',
      height: '325px',
      marginRight: '50px'
    }}
    src="https://www.youtube.com/embed/lqHcn1mF9eA"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

<iframe
    style={{
      width: '300px',
      height: '325px',
      marginRight: '50px'
    }}
    src="https://www.youtube.com/embed/K0WC34o5hpc"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
 
 <iframe
    style={{
      width: '300px',
      height: '325px',
      marginRight: '50px'
    }}
    src="https://www.youtube.com/embed/iYvibcb14kA"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
</Row>

                  
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
