import React from "react"
import "../App.css"
import {Animated} from "react-animated-css"
import {Link} from "react-router-dom"
import Send from "../img/send.png"

const Frontpage = () => {
  const Load = () => {
    return (
      <div>
        <div className='bg-image'></div>
        <div className='bg-text'>
          <Animated
            animationIn='bounceInLeft'
            animationOut='fadeOut'
            isVisible={true}>
            <h1 className='head1'>Not</h1>
          </Animated>
          <Animated
            animationIn='bounceInRight'
            animationOut='fadeOut'
            animationInDuration='2000'
            animationOutDuration='2000'
            isVisible={true}>
            <h1 className='head1'>Your</h1>
          </Animated>
          <Animated
            animationIn='bounceInLeft'
            animationOut='fadeOut'
            animationInDuration='3000'
            animationOutDuration='3000'
            isVisible={true}>
            <h1 className='head1'>Average</h1>
          </Animated>
          <Animated
            animationIn='bounceInRight'
            animationOut='fadeOut'
            animationInDuration='4000'
            animationOutDuration='4000'
            isVisible={true}>
            <h1 className='head1'>Software</h1>
          </Animated>
          <Animated
            animationIn='bounceInLeft'
            animationOut='fadeOut'
            animationInDuration='5000'
            animationOutDuration='5000'
            isVisible={true}>
            <h1 className='head1'>Engineer</h1>
          </Animated>
          <p className='head2'>
            Get ready to turn your <strong className='head3'>"ideas"</strong>{" "}
            into <strong className='head3'>"reality"</strong>
          </p>

          <div className='centered'>
            <Link to='/Showcase'>
              <Animated
                animationIn='bounceInRight'
                animationOut='fadeOut'
                isVisible={true}>
                <img alt='' className='showed' src={Send} />
              </Animated>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Load />
    </div>
  )
}
export default Frontpage
