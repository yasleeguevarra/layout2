import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Single box component for the header
function Headersmallbox(props) {
  return <div className="small-header-box">{props.text}</div>;
}

// Single box component for the footer
function Footersmallbox(props) {
  return <div className="small-footer-box">{props.text}</div>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="header">
        <div className="header-content">
          <div className="box-left"></div>
          <div className="small-box-container">
            {/* These are the two small boxes in the header */}
            <Headersmallbox text="Yaslee" />
            <Headersmallbox text="Guevarra" />
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
          {/* These are the two small boxes in the footer */}
          <Footersmallbox text="C-PCIT9" />
          <Footersmallbox text="IT3A" />
          <div className="small-box6"></div>
        </div>
      </div>
    </div>
  );
}

export default App;