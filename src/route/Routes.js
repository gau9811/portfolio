import React from "react"
import {Route} from "react-router-dom"

import Contact from "../component/Contact"
import About from "../component/About"
import Showcase from "../component/ShowCase"
import {spring, AnimatedSwitch} from "react-router-transition"
import "../App.css"

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  }
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  })
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
}

const routes = () => {
  return (
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}>
      <Route exact path='/Contact-me' component={Contact} />
      <Route exact path='/About-me' component={About} />
      <Route exact path='/Showcase' component={Showcase} />
    </AnimatedSwitch>
  )
}

export default routes
