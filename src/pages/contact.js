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
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px;
    @media (max-width: 767px) {
      flex: none;
      width: 100%;
    }
  }
  input,
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 1.45rem;
  }
  a {
    color: var(--blue);
  }
`

const Contact = ({ data }) => {
  const node = data.allInfoJson.edges[0].node
  return (
    <Layout>
      <SEO title="Contact" />
      <Page>
        <div className="wrapper">
          <h1>
            Contact us
          </h1>
          <div className="image-container">
            <Img
              fluid={data.hero.childImageSharp.fluid}
              alt="image 1"
            />
          </div>
          <div className="row">
            <div className="col">
              <h3>Send Us A Messgae</h3>
              <form
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Name"
                  placeholder="Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  aria-label="Phone Number"
                  placeholder="Phone"
                />
                <textarea
                  id="message"
                  name="message"
                  aria-label="Message"
                  placeholder="Message"
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
            <div className="col">
              <h3>Other Ways To Get In Touch</h3>
              <ul>
                <li>
                  <a href={`tel:${node.phone}`}>Call {node.phone_formatted}</a>
                </li>
                <li>
                  <a href={`mailto:${node.email}`}>Email {node.email}</a>
                </li>
                <li>Fax {node.fax}</li>
                <li>
                  <a href={node.facebook_url} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={node.instagram_url} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={node.google_url} target="_blank" rel="noreferrer">
                    Google
                  </a>
                </li>
                <li>
                  <a href={node.map_url} target="_blank" rel="noreferrer">
                    {node.address}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <iframe  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>

      </Page>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query ContactPageQuery {
    allInfoJson {
      edges {
        node {
          email
          phone
          phone_formatted
          facebook_url
          instagram_url
          google_url
          map_url
          address
          fax
        }
      }
    }
    hero: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
