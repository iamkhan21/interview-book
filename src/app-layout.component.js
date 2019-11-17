import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Header, Menu } from "./components"

const Container = styled.main`
  padding: 0 1.0875rem 1.45rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  
  @media (min-width: 960px) {
    grid-template-columns: 200px 1fr;
  }

  .content-container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
`
const Footer = styled.footer`
  font-size: 14px;
  text-align: center;
  padding: 2px;
`

// Global application wrapper
export const AppLayout = ({ children, pageContext }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container>
            <Menu />
            <section className="content-container">{children}</section>
          </Container>

          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </>
      )
    }}
  />
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
