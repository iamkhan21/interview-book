import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { safelyGetSiteConfig } from "../cms"
import { Link } from "gatsby"

export const query = graphql`
  query {
    sitePage(path: { eq: "/config/" }) {
      context {
        frontmatter {
          menu_nav {
            text
            url
          }
        }
      }
    }
  }
`
const Aside = styled.aside`
  .menu-item + .menu-item {
    border-top: 1px solid #000000;
  }
`
const MenuItem = styled(Link)`
  color: #333;
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  box-sizing: border-box;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
`

export const Menu = () => (
  <StaticQuery
    query={query}
    render={data => {
      const menu = safelyGetSiteConfig(data.sitePage).menu_nav || []
      return (
        <Aside>
          {menu.map((item, i) => (
            <div key={i} className="menu-item">
              <MenuItem to={item.url}>{item.text}</MenuItem>
            </div>
          ))}
        </Aside>
      )
    }}
  />
)
