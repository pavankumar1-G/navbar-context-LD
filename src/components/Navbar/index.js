// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeThemeOfBackground = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <>
          <div className="dark-navbar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="dark-website-logo"
            />

            <div className="navbar-menu-container">
              <ul className="navbar-list">
                <Link to="/" className="menu-item-link">
                  <li className="dark-navbar-item">Home</li>
                </Link>
                <Link to="/about" className="menu-item-link">
                  <li className="dark-navbar-item">About</li>
                </Link>
              </ul>
            </div>
            <button
              className="theme-change-btn"
              type="button"
              data-testid="theme"
              onClick={changeThemeOfBackground}
            >
              <img
                className="dark-btn-img-icon"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="light-navbar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="light-website-logo"
            />
            <div className="navbar-menu-container">
              <ul className="navbar-list">
                <Link to="/" className="menu-item-link">
                  <li className="light-navbar-item">Home</li>
                </Link>
                <Link to="/about" className="menu-item-link">
                  <li className="light-navbar-item">About</li>
                </Link>
              </ul>
            </div>
            <button
              className="theme-change-btn"
              type="button"
              data-testid="theme"
              onClick={changeThemeOfBackground}
            >
              <img
                className="light-btn-img-icon"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            </button>
          </div>
          <hr className="hz-line" />
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
