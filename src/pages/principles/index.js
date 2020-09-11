import React from 'react'
import { Link } from 'gatsby'

export default () => <>
    <h1> Design Principles </h1>
    <ul>
        <li>
            <h3> 
                <Link to="/principles/glanceable">
                    Glanceable 
                </Link>
            </h3>
        </li>
        <li>
            <Link to="/principles/concise">
                <h3> 
                    Concise 
                </h3>
            </Link>
        </li>
        <li>
            <Link to="/principles/selfcontained">
                <h3> 
                    Self-contained 
                </h3>
            </Link>
        </li>
        <li>
            <Link to="/principles/reusability">
                <h3> 
                    Reusability 
                </h3>
            </Link>
        </li>
        <li>
            <Link to="/principles/accessible">
                <h3> 
                    Accessible 
                </h3>
            </Link>
        </li>
        <li>
            <Link to="/principles/consistency"> 
                <h3> 
                    Consistency 
                </h3>
            </Link>
        </li>
        <li>
            <Link to="/principles/fluency">
                <h3> 
                    Fluency 
                </h3>
            </Link>
        </li>
    </ul>
</>
