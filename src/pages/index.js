import React from "react";
import { Link } from "gatsby";
import { useIndexI18n } from "../hooks/use-index-i18n";

export default function () {
  const { title, description, links } = useIndexI18n("en");
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={`link_${i}`}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
