// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutContentContainer = isDarkTheme
        ? 'dark-about-content-container'
        : 'light-about-content-container'
      const aboutIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutHeading = isDarkTheme ? 'dark-about-text' : 'light-about-text'
      return (
        <div className="about-container">
          <Navbar />
          <div className={aboutContentContainer}>
            <img src={aboutIcon} className="about-icon" alt="about" />
            <h1 className={aboutHeading}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
