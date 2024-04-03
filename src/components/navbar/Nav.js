import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                    <Link to="/battung" className="link">Battung</Link>
                    </li>
                    <li>
                    <Link to="/dulzo" className="link">Dulzo</Link>
                    </li>
                    <li>
                        <Link to="/cruz" className="link">Jerwie</Link>
                    </li>
                    <li>
                        <Link to="/lacanienta" className="link">Lacanienta</Link>
                    </li>
                    <li>
                        <Link to="/ramirez" className="link">Ramirez</Link>
                    </li>
                    <li>
                        <Link to="/kim" className="link">Sobrepena</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav