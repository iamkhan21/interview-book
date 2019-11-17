import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { safelyGetSiteConfig } from "../cms"

export const query = graphql`
  query {
    sitePage(path: { eq: "/config/" }) {
      context {
        frontmatter {
          menu_nav {
            label
            links {
              text
              url
            }
          }
        }
      }
    }
  }
`
const Aside = styled.aside`
  position: relative;
  .container {
    position: sticky;
    top: 20px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }
`

const MenuItemWrap = styled.div`
  .title {
    margin: 0 0 5px;
    cursor: pointer;
  }
  & + .menu-item {
    margin-top: 5px;
    padding-top: 10px;
    border-top: 1px solid #e5e5e5;
  }
`
const MenuLink = styled(Link)`
  font-size: 14px;
  color: #333;
  padding: 2px 5px;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
`

const MenuItem = ({ label, links }) => {
  const [show, toggle] = React.useState(false)
  return (
    <MenuItemWrap className="menu-item">
      <h3 className="title" onClick={() => toggle(!show)}>
        {label}
      </h3>
      {show &&
        (links || []).map(({ url, text }, x) => (
          <MenuLink key={x} to={url}>
            {text}
          </MenuLink>
        ))}
    </MenuItemWrap>
  )
}
export const Menu = () => (
  <StaticQuery
    query={query}
    render={data => {
      const menu = safelyGetSiteConfig(data.sitePage).menu_nav || []
      return (
        <Aside>
          <div className="container">
            {menu.map((item, i) => (
              <MenuItem key={i} {...item} />
            ))}
          </div>
        </Aside>
      )
    }}
  />
)
