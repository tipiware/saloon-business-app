import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import "./fonts.css"

const Layout = ({ children, templateName }) => {
  return (
    <>
      <Header templateName={templateName} />
      <main>{children}</main>
      <footer
        style={{
          backgroundColor: "var(--blue)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div className="wrapper">
        Copyright is all rights reserved. Creative Commons is some rights reserved
          <br />
          <a
            href=""
            style={{ color: "#ffffff" }}
            target="_blank"
            rel="noreferrer"
          >
            Happy town, Malaysia
          </a>
          <br />
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
