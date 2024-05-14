// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return isDarkTheme ? (
        <div className="dark-home-container">
          <Navbar />
          <div className="dark-home-content-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              className="dark-img"
            />
            <h1 className="dark-home-heading">Home</h1>
          </div>
        </div>
      ) : (
        <div className="light-home-container">
          <Navbar />
          <div className="light-home-content-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="light-img"
            />
            <h1 className="light-home-heading">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
