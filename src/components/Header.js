import "../css/Header.css"
import logo from "../image/assets/kril-lotin.png"
import React from 'react'

export default function Header() {
  return (
    <div id="main-header" className="main-header">
        <div className="container">
            <div className="wrapper">        
                <img className="logo" src={logo}/>

            </div>
        </div>
    </div>
  )
}
