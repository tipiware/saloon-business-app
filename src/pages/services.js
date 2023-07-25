import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Scrollspy from "react-scrollspy"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = styled.div`
  a {
    color: var(--blue);
  }
  .image-container {
    width: 100%;
    padding-bottom: 1.45rem;
  }
  section {
    margin-bottom: 3rem;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .col {
    display: flex;
    flex-direction: column;
    &.content {
      flex: 3;
    }
    &.scroll-nav {
      flex: 2;
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
  ul.sticky {
    position: sticky;
    top: 10px;
    list-style-type: none;
  }
  .is-current {
    a {
      font-weight: bold;
    }
  }
`

const createMarkup = string => ({ __html: string })

const AboutServices = ({ data }) => {
  const { node } = data.allPagesJson.edges[0]
  return (
    <Layout>
      <SEO title="Services" />
      <Page>
        <div className="wrapper">
          <h1>{node.page_title}</h1>
          <div className="image-container">
            <Img fluid={node.hero.childImageSharp.fluid} alt={node.hero_alt} />
          </div>
          <div className="row">
            <div className="col content">
              {node.sections.map((section, index) => (
                <section id={`section-${index}`} key={`section-${index}`}>
                  <h2>{section.title}</h2>
                  {section.image && (
                    <div className="image-container">
                      <Img
                        fluid={section.image.childImageSharp.fluid}
                        alt={section.image_alt}
                      />
                    </div>
                  )}
                  <div dangerouslySetInnerHTML={createMarkup(section.html)} />
                </section>
              ))}
            </div>
            <div className="col scroll-nav">
              <Scrollspy
                className="sticky"
                items={["section-0", "section-1", "section-2", "section-3"]}
                currentClassName="is-current"
              >
                {node.sections.map((section, index) => (
                  <li key={`nav-item-${index}`}>
                    <a href={`#section-${index}`}>{section.title}</a>
                  </li>
                ))}
              </Scrollspy>
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default AboutServices

export const query = graphql`
  query AboutServicesQuery {
    allPagesJson(filter: { slug: { eq: "about-cpas" } }) {
      edges {
        node {
          page_title
          hero {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          hero_alt
          sections {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1040) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image_alt
            html
          }
        }
      }
    }
  }
`
