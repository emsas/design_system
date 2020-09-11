import React from 'react'
import { Link } from 'gatsby'

export default () => <>
    <ul>
        <li>
            <li>
                <Link to="/components/document_sections/header">
                    Header
                </Link>
            </li>
            <ul>
                <li>
                    <Link to="/components/document_sections/nav">
                        Nav
                    </Link>
                </li>
            </ul>
        </li>
        <li>
            <Link to="/components/document_sections/main">
                Main
            </Link>
        </li>
        <li>
            <ul>
                <li>
                    <Link to="/components/document_sections/section">
                        Section
                    </Link>
                </li>
                <li>
                    <Link to="/components/document_sections/aside">
                        Aside
                    </Link>
                </li>
                <li>
                    <Link to="/components/document_sections/article">
                        Article
                    </Link>
                </li>
            </ul>
        </li>
        <li>
            <Link to="/components/document_sections/footer">
                Footer
            </Link>
        </li>
<hr />
        <li>
            <Link to="/components/document_sections/hg">
                Hg
            </Link>
        </li>
        <li>
            <ul>
                <li>
                    <Link to="/components/document_sections/h1">
                        H1
                    </Link>
                </li>
                <li>
                    <Link to="/components/document_sections/h2">
                        H2
                    </Link>
                </li>
                <li>
                    <Link to="/components/document_sections/h3">
                        H3
                    </Link>
                </li>
                <li>
                    <Link to="/components/document_sections/h4">
                        H4
                    </Link>
                </li>
                <li>
                    <Link to="/components/document_sections/h5">
                        H5
                    </Link>
                </li>
                <li>
                    <Link to="/components/document_sections/h6">
                        H6
                    </Link>
                </li>
            </ul>
        </li>
    </ul>
</>