import React from "react"

export const Heading = ({ tag, children, ...props }) => {
  const Htag = `h${tag}`
  return (
    <Htag style={{ margin: "30px 0 0" }} {...props}>
      {children}
    </Htag>
  )
}

export default Heading
