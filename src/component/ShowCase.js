import React, {useState, useEffect} from "react"
import axios from "axios"
import {Container, Row, Col} from "react-bootstrap"
import {Animated} from "react-animated-css"
import {Link} from "react-router-dom"
import diamond from "../img/icons/1.png"
import paint from "../img/icons/2.png"
import rular from "../img/icons/3.png"
import heart from "../img/icons/4.png"
import "../component/component.css"
import Showcase3 from "../img/images/download.jpg"
import Showcase12 from "../img/images/15.png"
import Showcase15 from "../img/images/20.png"
import Showcase19 from "../img/images/31.png"
import Github from "../img/github1.png"
import Github2 from "../img/github2.png"
import "../App.css"

const ShowCase = () => {
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
                <Link to='/' className='menu-item'>
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
                  <img alt='' className='ham-git-img' src={Github2} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

  const Heading = () => {
    return (
      <div className='Main-Container'>
        <div className='sm-container'>
          <Container>
            <Row>
              <Col lg={3} xs={12}>
                <Animated
                  animationIn='bounceInLeft'
                  animationOut='fadeOut'
                  animationInDuration={3000}
                  isVisible={true}>
                  <div className='new'>
                    <img alt='' src={diamond} />
                  </div>
                  <p className='subimgtext'>world-class app</p>
                </Animated>
              </Col>

              <Col lg={3} xs={12}>
                <Animated
                  animationIn='bounceInLeft'
                  animationOut='fadeOut'
                  animationInDuration={3000}
                  isVisible={true}>
                  <div className='new'>
                    <img alt='' src={paint} />
                  </div>
                  <p className='subimgtext'>Tailored To Your Needs</p>
                </Animated>
              </Col>

              <Col lg={3} xs={12}>
                <Animated
                  animationIn='bounceInRight'
                  animationOut='fadeOut'
                  animationInDuration={3000}
                  isVisible={true}>
                  <div className='new'>
                    <img alt='' src={rular} />
                  </div>
                  <p className='subimgtext'>Pixel-Perfect Code</p>
                </Animated>
              </Col>

              <Col lg={3} xs={12}>
                <Animated
                  animationIn='bounceInRight'
                  animationOut='fadeOut'
                  animationInDuration={3000}
                  isVisible={true}>
                  <div className='sub-content'>
                    <div className='new'>
                      <img alt='' src={heart} />
                    </div>
                    <p className='subimgtext'>Built With Love</p>
                  </div>
                </Animated>
              </Col>
            </Row>
          </Container>

          <Row>
            <Col>
              <Animated
                animationIn='bounceInLeft'
                animationOut='fadeOut'
                animationInDuration={3000}
                isVisible={true}>
                <h1 className='head-text'>
                  Hi.I'm Gaurav, a software developer from India,Delhi. Please
                  take a look around!
                </h1>
              </Animated>
            </Col>
            <Col>
              <Animated
                animationIn='bounceInRight'
                animationOut='fadeOut'
                animationInDuration={3000}
                isVisible={true}>
                <h1 className='sm-head-text'>
                  I am passionate about building excellent software that
                  improves the lives of those around me. I specialize in
                  creating software for clients ranging from individuals and
                  small-businesses. All of my work is produced locally from
                  India, Delhi. What would you do if you had a software
                  developer available at your fingertips?
                </h1>
              </Animated>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  const Content = ({repo}) => {
    return (
      <div>
        <h1 className='content-head'>Case Studies: Projects</h1>
        <Row style={{width: "100% "}}>
          <Col lg={3}>
            <div className='cen'>
              <img alt='' src={Showcase12} className='sub-image'></img>

              <div className='sub-text'>
                <a href={repo.map(res => res.html_url)[3]}>
                  <p style={{color: "white", fontSize: "20px"}}>CLOTH APP</p>
                  <p style={{color: "white", fontSize: "12px"}}>
                    This App is about selling clothes and buy clothes and Name
                    of this app Cloth. you can sell clothes having OLX feature
                    and you are ready to sell the cloth.
                  </p>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className='cen'>
              <img alt='' src={Showcase19} className='sub-image'></img>
            </div>
            <div className='sub-text'>
              <a href={repo.map(res => res.html_url)[0]}>
                <p style={{color: "white", fontSize: "20px"}}>Dev_Connector</p>
                <p style={{color: "white", fontSize: "12px"}}>
                  This is the developer community help you to communicate with
                  other developers and hang out with other developers talk to
                  each other using comment section like their comment see their
                  profile etc.{" "}
                </p>
              </a>
              <a href={"http://limitless-everglades-47222.herokuapp.com/"}>
                <p style={{color: "white", fontSize: "15px"}}>Dev_connector</p>
              </a>
            </div>
          </Col>
          <Col lg={3}>
            <div className='cen'>
              <img alt='' src={Showcase15} className='sub-image'></img>
            </div>
            <div className='sub-text'>
              <a href={repo.map(res => res.html_url)[4]}>
                <p style={{color: "white", fontSize: "20px"}}>Contact-app</p>
                <p style={{color: "white", fontSize: "12px"}}>
                  This is the contact manager app this app is like others app
                  but the data will save on database so if your app is deleted
                  from the phone you can reinstall the app and the same data
                  will be retrieve from your database and represent as you save
                  data previously{" "}
                </p>
              </a>
            </div>
          </Col>
          <Col lg={3}>
            <div className='cen'>
              <img alt='' src={Showcase3} className='sub-image'></img>
            </div>
            <div className='sub-text'>
              <a href={repo.map(res => res.html_url)[2]}>
                <p style={{color: "white", fontSize: "20px"}}>
                  SAMPLE APPS & CODE
                </p>
                <p style={{color: "white", fontSize: "12px"}}>
                  This is the small collection of sample app like spanish
                  talking app game you can check the code and the logic behind
                  it and many other app have been uploaded you can see all the
                  app code on my github profile.
                </p>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

  const Contact = () => {
    return (
      <div>
        <Row>
          <Col lg={6} style={{padding: "0px"}}>
            <div className='under-contact'>
              <div className='sup-square'>
                <div className='square'>
                  <Link
                    to='/Contact-me'
                    className='menu-item'
                    style={{textdecoration: "none"}}>
                    <h5 className='hover-text1'>Covinced?</h5>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} style={{padding: "0px"}}>
            <div className='under-About'>
              <div className='sup-circle'>
                <div className='circle'>
                  <Link to='/About-me' className='menu-item'>
                    <h5 className='hover-text2'>Continue Exporing?</h5>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

  const Foot = ({repo}) => {
    return (
      <Row xs={12}>
        <Col className='footer-pad'>
          <div className='footer'>
            <a className='foot' href={repo.map(res => res.owner.html_url)[0]}>
              <img alt='' className='footer-showed' src={Github} />
            </a>
            <p className='txt'>@2020 Gaurav bajaj</p>
          </div>
        </Col>
      </Row>
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
      <Heading />
      <div>
        {repos.map((repo, id) => (
          <Content key={id} repo={repo.data} />
        ))}
        <Contact />
        {repos.map((repo, id) => (
          <Foot key={id} repo={repo.data} />
        ))}
      </div>
    </div>
  )
}

export default ShowCase
