import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Hair Colouring",
      description: "Expert Application & Customization",
      imgUrl: projImg4
    },
    {
      title: "Balyage",
      description: "Artistic Color Technique & Styling",
      imgUrl: projImg5
    },
    {
      title: "Hair Extensions",
      description: "Seamless Integration & Styling",
      imgUrl: projImg6
    },
    {
      title: "Precision Haircut",
      description: "Tailored Cut & Styling",
      imgUrl: projImg7
    },
    {
      title: "Special Occasion Styling",
      description: "Elegant Updos & Creative Styling",
      imgUrl: projImg4
    },
    {
      title: "Hair Treatment",
      description: "Revitalization & Nourishment",
      imgUrl: projImg5
    }
  ];

  const firstPageProjects = [
    projects[0],
    projects[1],
    projects[2],
    projects[3],
    projects[4],
    projects[5]
  ];

  const secondPageProjects = [projects[3], projects[4], projects[5]];

  const thirdPageProjects = [projects[1], projects[3], projects[5]];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In the world of hairstyling, you'll witness the art of
                    transformation through an assortment of avant-garde
                    haircuts, exquisite coloring techniques, and intricate updos
                    that celebrate individuality and style. I take immense pride
                    in creating looks that reflect the unique essence of every
                    client, allowing their personalities to shine through their
                    hair.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Page 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Page 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Page 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstPageProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondPageProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <Row>
                          {thirdPageProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {thirdPageProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
