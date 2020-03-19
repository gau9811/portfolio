import React, {useState, useEffect} from "react"
import axios from "axios"
import {Form, Button} from "react-bootstrap"
import "./component.css"

import {Link} from "react-router-dom"
import Send from "../img/send2.png"
import Github from "../img/github1.png"
import Github2 from "../img/github2.png"
import {Row, Col} from "react-bootstrap"

import {withGoogleMap, GoogleMap, Marker} from "react-google-maps"
const Contact = () => {
  const [message, setmessage] = useState("")

  const submitValue = () => {
    setmessage("")
    const body = {message}
    const headers = {"Content-Type": "application/json"}
    axios.post("/telesign/msg", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
  }

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
                  <img alt='' className='ham-git-img' src={Github2} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
  const GoogleMaps = withGoogleMap(props => (
    <GoogleMap defaultCenter={{lat: 28.6139, lng: 77.209}} defaultZoom={13}>
      {props.isMarkerShown && <Marker position={{lat: 28.6139, lng: 77.209}} />}
    </GoogleMap>
  ))

  const Foot = ({repo}) => {
    return (
      <Row xs={12}>
        <Col className='footer-pad'>
          <div className='footer'>
            <a className='foot' href={repo.map(res => res.owner.html_url)[0]}>
              <img className='footer-showed' alt='' src={Github} />
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
      <div>
        <GoogleMaps
          containerElement={<div className='google-maps' />}
          mapElement={<div style={{height: `100%`}} />}
          isMarkerShown
        />
      </div>
      <div className='label-center'>
        <h1 className='label-text'>Send a message.</h1>
      </div>
      <Form onSubmit={submitValue}>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Control
            placeholder='Enter important elements like Name and E-mail'
            className='txtarea'
            as='textarea'
            rows='3'
            onChange={e => setmessage(e.target.value)}
          />
        </Form.Group>

        <Button className='btn' variant='light' type='submit'>
          <img src={Send} alt='' />
          <p>Send</p>
        </Button>
      </Form>
      {repos.map((repo, id) => (
        <Foot key={id} repo={repo.data} />
      ))}
    </div>
  )
}

export default Contact
