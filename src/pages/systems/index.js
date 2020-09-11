import React from "react"
import { Link } from 'gatsby'

export default () => <>
    <h1> Design system workflow</h1>
    <ul>
        <li>
            <h2> 
                <Link to="/systems/deploy_workflow">
                    Deploy workflow 
                </Link>
            </h2>
        </li>
        <li>
            <h2> 
                <Link to="/systems/desgin_workflow">
                    Desgin workflow
                </Link>
            </h2>
        </li>
        <li>
            <h2> 
                <Link to="/systems/design_system">
                    Design system 
                </Link>
            </h2>
        </li>
    </ul>
</>