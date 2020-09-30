import React from "react";
import { Link } from "gatsby";
import { usePrincipleI18n } from "../../../hooks/use-principle-i18n";

export default function () {
  const { title, description, items } = usePrincipleI18n("es");
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {items.map((link, i) => {
          return (
            <li key={`link_${i}`}>
              <Link to={link.href}>
                {link.label}
                <br />
                <span>{link.description}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
