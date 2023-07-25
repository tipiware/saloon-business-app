import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = styled.div`
  h1 {
    line-height: 0.5;
    span {
      font-size: 1rem;
      padding-left: 5px;
    }
  }
  .image-container {
    width: 100%;
    padding-bottom: 1.45rem;
  }
`

const About = ({data}) => {
  return (
    <Layout>
      <SEO title="About" />
      <Page>
        <div className="wrapper">
          <h1>
            About us
          </h1>
          <div>
            <p>Welcome to our Salon, where beauty meets passion and where every individual is celebrated for their unique style and essence. As a team of dedicated beauty professionals, we take pride in curating a haven where clients can indulge in a world of self-care and transformation.At the heart of our Salon is the belief that beauty is not just about appearances but a reflection of one's inner confidence and joy. Our mission is to empower each client to embrace their authenticity, fostering a sense of self-assurance that radiates from within. 
            </p>
          </div>
          <div className="image-container">
            <Img
              fluid={data.hero.childImageSharp.fluid}
              alt="Desk with laptop and headset"
            />
          </div>
          <div>
            <p>Led by a team of experienced stylists, estheticians, and therapists, we are committed to providing the highest quality of services tailored to your specific needs. We understand that no two individuals are the same, and so we take the time to listen and understand your desires, ensuring that every visit is a personalized and unforgettable experience.Step into our inviting space, where contemporary aesthetics and warm ambiance blend harmoniously. Our salon is designed to be a sanctuary of relaxation, a place where you can unwind from the stresses of daily life and be rejuvenated by our nurturing touch. 
            </p>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default About

export const query = graphql`
  query AboutPageQuery {
    hero: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
