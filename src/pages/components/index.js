import React from 'react'
import { Link } from 'gatsby'

export default () => <>
    <h1>Components</h1>
    <ul>
        <li>
            <h2>
                <Link to="/components/atoms">
                    Atoms 
                </Link> 
            </h2>
        </li>
        <li>
            <h2> 
                <Link to="/components/molecules">
                    Molecules 
                </Link>
            </h2>
        </li>
        <li>
            <h2> 
                <Link to="/components/organisms">
                    Organisms
                </Link>
            </h2>
        </li>
        <li>
            <h2> 
                <Link to="/components/templates">
                    Templates
                </Link>
            </h2>
        </li>
        <li>
            <h2> 
                <Link to="/components/pages">
                    Pages 
                </Link>
            </h2>
        </li>
    </ul>
</>