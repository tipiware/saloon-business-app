import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { SiGooglemaps } from "react-icons/si"
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import logo from "../images/logo.png"

const Component = styled.header`
  margin-bottom: 1.45rem;
  z-index: 2;
  position: relative;
  .nav-container {
    background-color: var(--blue);
  }
  .contact-nav {
    display: flex;
    flex-direction: row;
    max-width: 1170px;
    margin: 0 auto;
    a {
      color: #ffffff;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      padding: 10px;
      svg {
        margin: 0 5px;
      }
    }
  }
  .social {
    ul {
      margin-top: 5px;
    }
  }
  .traditional {
    flex: auto;
    ul {
      text-align: right;
    }
  }
  ul {
    margin-bottom: 0;
    @media (max-width: 500px) {
      margin-left: 0;
    }
  }
  li {
    display: inline-block;
    list-style-type: none;
    margin-bottom: 0;
  }
  h1 {
    text-align: center;
    padding: 5px;
    img {
      max-width: 100%;
    }
  }
  .small-hide {
    @media (max-width: 706px) {
      display: none;
    }
  }
  nav {
    width: 960px;
    max-width: 100%;
    margin: 0 auto;
    ul {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-left: 0;
      padding: 0 5px 10px;
    }
    li {
      padding: 10px 5px 0;
    }
    a {
      color: var(--blue);
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
  @media (max-width: 900px) {
    background-color: ${({ templateName }) =>
      templateName === "index" ? "#9ab8d3" : "#ffffff"};
    margin-bottom: 0;
    padding-bottom: 1.45rem;
  }
`

const Header = ({ templateName }) => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      allInfoJson {
        edges {
          node {
            email
            phone
            phone_formatted
            facebook_url
            instagram_url
            google_url
          }
        }
      }
    }
  `)
  const node = data.allInfoJson.edges[0].node
  return (
    <Component templateName={templateName}>
      <div className="nav-container">
        <div className="contact-nav">
          <div className="social">
            <ul>
              <li>
                <a href={node.facebook_url} target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href={node.instagram_url} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href={node.google_url} target="_blank" rel="noreferrer">
                  <SiGooglemaps />
                </a>
              </li>
            </ul>
          </div>
          <div className="traditional">
            <ul>
              <li>
                <a href={`tel:${node.phone}`}>
                  <FaPhone />
                  <span className="small-hide">{node.phone_formatted}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${node.email}`}>
                  <FiMail />
                  <span className="small-hide">{node.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 style={{ margin: 0 }}>

      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Component>
  )
}

export default Header
