import React from 'react'
import { Link } from 'gatsby'

export default () => <>
    <h2>Atoms Components</h2>
    <ul>
        <li>
            <h3>
                <Link to="/components/text-level_semantics">
                    Text-level semantics
                </Link>
            </h3>
        </li>
        <li>
            <h3>
                <Link to="/components/forms">
                    Forms
                </Link>
            </h3>
        </li>
        <li>
            <h3>
                <Link to="/components/tabular_data">
                    Tabular data
                </Link>
            </h3>
        </li>
        <li>
            <h3>
                <Link to="/components/grouping_content">
                    Grouping content
                </Link>
            </h3>
        </li>
        <li>
            <h3>
                <Link to="/components/document_sections">
                    Document sections
                </Link>
            </h3>
        </li>            
        <li>
            <h3>
                <Link to="/components/interactive_elements">
                    Interactive elements
                </Link>
            </h3>
        </li>    
        <li>
            <h3>
                <Link to="/components/embedding_content">
                    Embedding content
                </Link>
            </h3>
        </li>    
    </ul>
</>


