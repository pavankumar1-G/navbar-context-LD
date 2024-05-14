// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBackground = isDarkTheme
        ? 'dark-not-found-content-container'
        : 'light-not-found-content-container'
      const notFoundHeading = isDarkTheme
        ? 'dark-not-found-heading'
        : 'light-not-found-heading'
      const notFoundPara = isDarkTheme
        ? 'dark-not-found-para'
        : 'light-not-found-para'
      return (
        <div className="not-found-container">
          <Navbar />
          <div className={notFoundBackground}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={notFoundHeading}>Lost Your Way?</h1>
            <p className={notFoundPara}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
