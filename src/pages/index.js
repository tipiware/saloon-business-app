import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  FaHandshake,
  FaRegMoneyBillAlt,
  FaChartLine,
  FaRegClock,
  FaHome,
  FaGift,
} from "react-icons/fa"
import { GiReceiveMoney } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = styled.div`
  .color-wrap {
    background-color: #000000;
  }
  .image-container {
    width: 100%; 
    position: relative;
    &.hero {
      margin-top: -300px;
      @media (max-width: 900px) {
        margin-top: 0;
      }
    }
  }
  h2 {
    color: var(--off-white);
    margin-top: -2px;
    text-align: center;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
    span {
      border-bottom: 1px solid var(--off-white);
      display: inline-block;
      padding: 15px;
      margin-bottom: -30px;
      width: 575px;
      max-width: 100%;
    }
  }
  h3 {
    border-bottom: 1px solid var(--grey);
    font-size: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 15px;
    text-align: center;
  }
  h4 {
    color: var(--blue);
    margin-bottom: 0;
  }
  .statement {
    background-color: #000000;
    color: var(--grey);
    padding-top: 1.45rem;
    padding-bottom: 1.45rem;
    text-align: justify;
  }
  .pull-up {
    margin-top: -200px;
    z-index: 10;
    position: relative;
  }
  .services {
    margin: 0 auto;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &.individual-family {
      max-width: 1440px;
    }
  }
  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.title,
    &.list {
      flex: 1;
      padding: 3rem;
      .content-wrapper {
        max-width: 720px;
        margin-right: auto;
      }
      @media (max-width: 991px) {
        padding: 3rem 1.5rem;
      }
      @media (max-width: 768px) {
        flex: none;
        width: 100%;
        .content-wrapper {
          max-width: 100%;
        }
      }
    }
    &.title {
      background-color: var(--blue);
      color: var(--off-white);
      .content-wrapper {
        margin-left: auto;
        margin-right: 0;
        @media (max-width: 768px) {
          margin: 0 auto;
          p:last-of-type {
            margin-bottom: 0;
          }
        }
      }
      h3 {
        width: 360px;
        max-width: 100%;
      }
      p {
        color: var(--grey);
        font-size: 1.2rem;
        text-align: center;
      }
      svg {
        font-size: 100px;
      }
    }
  }
  .absolute-content {
    position: absolute;
    top: 0;
    width: 100%;
    color: var(--off-white);
    padding: 1.45rem;
    h3 {
      margin-top: 1.45rem;
      max-width: 540px;
    }
    p {
      color: var(--grey);
      font-size: 1.2rem;
      margin-left: auto;
      margin-right: auto;
      max-width: 640px;
      text-align: center;
    }
    @media (max-width: 768px) {
      background-color: #000000;
      position: relative;
    }
  }
  .individual-family {
    padding-top: 0;
    .col {
      flex: 1;
      &:nth-child(2) {
        margin-left: auto;
      }
      @media (max-width: 767px) {
        flex: none;
        width: 100%;
      }
    }
  }
  .item {
    color: var(--off-white);
    display: flex;
    flex-direction: row;
    padding: 1.45rem;
    .bullet {
      border-radius: 50%;
      border: 1px solid var(--off-white);
      display: flex;
      height: 70px;
      width: 70px;
      min-width: 70px;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 2.2rem;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1.45rem;
    }
    h4 {
      color: var(--off-white;
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
      margin-bottom: 0;
    }
    @media (max-width: 500px) {
      padding: 0.75rem 0;
    }
  }
`

const IndexPage = ({ data }) => {
  const { node } = data.allPagesJson.edges[0]
  return (
    <Layout templateName="index">
      <SEO title="Home" />
      <Page>
        <div className="color-wrap">
          <div className="image-container hero">
            <Img fluid={node.hero.childImageSharp.fluid} alt={node.hero_alt} />
          </div>
          <h2>
            <span>{node.page_title}</span>
          </h2>
          <div className="statement">
            <p className="wrapper">{node.statements[0]}</p>
            <p className="wrapper">{node.statements[1]}</p>
          </div>
        </div>
        <div className="services">
          <div className="row">
            <div className="col title">
              <div className="content-wrapper">
                <h3>{node.business_services.title}</h3>
                <p>{node.business_services.text}</p>
                <p>
                  <FaHandshake />
                </p>
              </div>
            </div>
            <div className="col list">
              <div className="content-wrapper">
                {node.business_services.bullets.map((bullet, index) => (
                  <div key={`bs-${index}`}>
                    <h4>{bullet.title}</h4>
                    <p>{bullet.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Img
            fluid={node.family_services.hero.childImageSharp.fluid}
            alt={node.family_services.hero_alt}
          />
          <div className="absolute-content">
            <h3>{node.family_services.title}</h3>
            <p>{node.family_services.text}</p>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allPagesJson(filter: { slug: { eq: "/" } }) {
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
          statements
          business_services {
            title
            text
            bullets {
              title
              text
            }
          }
          family_services {
            title
            text
            hero {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            hero_alt
          }
        }
      }
    }
  }
`
