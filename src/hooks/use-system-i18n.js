import { useStaticQuery, graphql } from "gatsby";
import { getLangugeTransform } from "../utils/i18n";

export const usePrincipleI18n = (language) => {
  const { i18NYaml } = useStaticQuery(graphql`
    query {
      i18NYaml {
        page {
          systems {
            description {
              en
              es
            }
            title {
              en
              es
            }
            items {
              label {
                en
                es
              }
              description {
                en
                es
              }
            }
          }
        }
      }
    }
  `);
  const i18n = i18NYaml.page.systems;
  return getLangugeTransform(i18n, language);
};
