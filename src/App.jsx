import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
        <div className="header">
          <div className="header-content">
            <div className="box-left"></div>
            <div className="small-box-container">
              <div className="small-box1"></div>
              <div className="small-box2"></div>
            </div>
            <div className="box-right"></div>
          </div>
        </div>

        <div className="content">
          <div className="large-box"></div>
          <div className="right-side">
            <div className="medium-box1"></div>
            <div className="medium-box2"></div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-content">
            <div className="small-box3"></div>
            <div className="small-box4"></div>
            <div className="small-box5"></div>
            <div className="small-box6"></div>
          </div>
        </div>
      </div>
      )
}

export default App
