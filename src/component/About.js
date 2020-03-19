import React, {useEffect, useState} from "react"
import "./component.css"
import Gaurav from "../img/Gaurav.jpg"
import {Link} from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap"
import {Animated} from "react-animated-css"
import Github from "../img/github1.png"
import Github2 from "../img/github2.png"
import javascript from "../img/icon4.png"
import node from "../img/icon3.png"
import react from "../img/icon2.png"
import express from "../img/icon5.svg"
import git from "../img/icon6.png"
import docker from "../img/icon7.png"
import axios from "axios"
const About = () => {
  const [repos, setrepos] = useState([])

  const Url = () => {
    axios
      .get("/git/github")
      .then(res => res)
      .then(data => {
        let src = [...repos, data]
        setrepos(src)
      })
      .catch(err => err)
  }

  const Load = ({repo}) => {
    return (
      <div>
        <nav style={{height: "0px", width: "0px"}} role='navigation'>
          <div className='menuToggle'>
            <input type='checkbox' />
            <span></span>
            <span></span>
            <span></span>
            <ul className='menu'>
              <li>
                <Link to='/Showcase' className='menu-item'>
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to='/About-me' className='menu-item'>
                  <h1>About</h1>
                </Link>
              </li>
              <li>
                <Link to='/Contact-me' className='menu-item'>
                  <h1>Contact</h1>
                </Link>
              </li>
              <li>
                <a
                  className='ham-git'
                  href={repo.map(res => res.owner.html_url)[0]}>
                  <img className='ham-git-img' alt='' src={Github2} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

  const Contact = ({repo}) => {
    return (
      <div>
        <Row>
          <Col lg={6} xs={12} style={{paddingRight: "0px  "}}>
            <img alt='' className='photo' src={Gaurav} />
          </Col>
          <Col lg={6} xs={12} className='show'>
            <h1 className='show1'>Gaurav</h1>
            <h2 className='show2'>Bajaj</h2>
            <Container>
              <p className='show3'>
                I am seasoned software developer who can develop the product for
                personal client and enterprise company. I am specialize in
                building applications specific to buisness need of my client. I
                have done work in software development, mobile app creation and
                front-end/back-end web database/server managment.
              </p>
            </Container>
          </Col>
        </Row>
        <div>
          <h1 className='tech-head'>Web Technologies SCM & Devops</h1>
          <div className='tech-div'>
            <Row>
              <Col lg={2} sm={2}>
                <Animated
                  animationIn='bounceInLeft'
                  animationOut='fadeOut'
                  animationInDuration={4000}
                  isVisible={true}>
                  <img alt='' className='tech-img' src={javascript} />
                  <p>Javascript</p>
                </Animated>
              </Col>
              <Col lg={2} sm={2}>
                <Animated
                  animationIn='bounceInRight'
                  animationOut='fadeOut'
                  animationInDuration={4000}
                  isVisible={true}>
                  <img alt='' className='tech-img' src={node} />
                  <p>Node.js</p>
                </Animated>
              </Col>
              <Col lg={2} sm={2}>
                <Animated
                  animationIn='bounceInLeft'
                  animationOut='fadeOut'
                  animationInDuration={4000}
                  isVisible={true}>
                  <img alt='' className='tech-img' src={react} />
                  <p>React.js</p>
                </Animated>
              </Col>
              <Col lg={2} sm={2}>
                <Animated
                  animationIn='bounceInRight'
                  animationOut='fadeOut'
                  animationInDuration={4000}
                  isVisible={true}>
                  <img alt='' className='tech-img' src={express} />
                  <p>express.js</p>
                </Animated>
              </Col>
              <Col lg={2} sm={2}>
                <Animated
                  animationIn='bounceInLeft'
                  animationOut='fadeOut'
                  animationInDuration={4000}
                  isVisible={true}>
                  <img alt='' className='tech-img' src={git} />
                  <p>Git</p>
                </Animated>
              </Col>
              <Col lg={2} sm={2}>
                <Animated
                  animationIn='bounceInLeft'
                  animationOut='fadeOut'
                  animationInDuration={4000}
                  isVisible={true}>
                  <img alt='' className='tech-img' src={docker} />
                  <p>Docker</p>
                </Animated>
              </Col>
            </Row>
          </div>
        </div>
        <div className='List'>
          <Container>
            <Row>
              <Col lg={4} xs={12}>
                <div className='title-2'>
                  <Animated
                    animationIn='bounceInLeft'
                    animationOut='fadeOut'
                    animationInDuration={2000}
                    isVisible={true}>
                    <h1 className='num'>01</h1>
                  </Animated>
                  <h1 className='title'>Research</h1>
                  <p className='title-1'>
                    Understand the client's subject matter completly and built
                    on the knowledge related to it and build on it, becoming
                    intimately familier with the subject matter. Determine
                    methods to address the specific cutomer's need and
                    requirements.
                  </p>
                </div>
              </Col>
              <Col lg={4} xs={12}>
                <div className='title-2'>
                  <Animated
                    animationIn='bounceInLeft'
                    animationOut='fadeOut'
                    animationInDuration={4000}
                    isVisible={true}>
                    <h1 className='num'>02</h1>
                  </Animated>
                  <h1 className='title'>Design</h1>
                  <p className='title-1'>
                    Misleadingly thought of as the superficial appearance of a
                    product, design actually encompasses a lot more. It is a
                    cross functional process that includes market research,
                    technical research, design of a concept, and prototype
                    mockup. Findings from the research and design phases are
                    utilized for the production of specific products including
                    materials, systems, and methods. Engineer utilizing the
                    research and designs to produce.
                  </p>
                </div>
              </Col>
              <Col lg={4} xs={12}>
                <div className='title-2'>
                  <Animated
                    animationIn='bounceInLeft'
                    animationOut='fadeOut'
                    animationInDuration={6000}
                    isVisible={true}>
                    <h1 className='num'>03</h1>
                  </Animated>
                  <h1 className='title'>Develop</h1>
                  <p className='title-1'>
                    Findings from the research and design phases are utilized
                    for the production of specific products including materials,
                    systems, and methods. Engineer utilizing the research and
                    designs to produce commercial products for the customer.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Row xs={12}>
            <Col className='footer-pad'>
              <div className='footer'>
                <a
                  className='foot'
                  href={repo.map(res => res.owner.html_url)[0]}>
                  <img alt='' className='footer-showed' src={Github} />
                </a>
                <p className='txt'>@2020 Gaurav bajaj</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  useEffect(() => {
    Url()
  }, [])

  return (
    <div>
      {repos.map((repo, id) => (
        <Load key={id} repo={repo.data} />
      ))}
      {repos.map((repo, id) => (
        <Contact key={id} repo={repo.data} />
      ))}
    </div>
  )
}

export default About
