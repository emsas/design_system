import { useStaticQuery, graphql } from "gatsby";
import { getLangugeTransform } from "../utils/i18n";

export const useIndexI18n = (language) => {
  const { i18NYaml } = useStaticQuery(graphql`
    query {
      i18NYaml {
        page {
          index {
            description {
              en
              es
            }
            title {
              en
              es
            }
            links {
              href {
                en
                es
              }
              label {
                en
                es
              }
            }
          }
        }
      }
    }
  `);
  const i18n = i18NYaml.page.index;
  return getLangugeTransform(i18n, language);
};
