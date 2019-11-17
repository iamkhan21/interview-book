import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { safelyGetFrontMatter } from "../cms"

import { Heading, SEO } from "../components"

const Container = styled.article`
  text-align: center;
`

const ImageContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
`

const Features = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`

const Feature = styled.div`
  text-align: left;
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "flame-design-science.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
const features = [
  {
    name: "From Zero to Hero",
    desc:
      "Go from zero to tech interview hero with this handbook. No prior interview experience needed.",
  },
  {
    name: "Curated Practice Questions",
    desc:
      "No one has time to practice a few hundred Leetcode questions. We tell you which are the best questions to practice.",
  },
  {
    name: "Interview Cheatsheet",
    desc: "Straight-to-the-point Do's and Don'ts during an interview",
  },
  {
    name: "Practical Algorithm Tips",
    desc:
      "Practical tips for every algorithm topic - common techniques and corner cases to look out for.",
  },
  {
    name: "Behavioral Questions",
    desc:
      "Check out what behavioral questions companies commonly ask and you can prepare your answers ahead of time.",
  },
  {
    name: "Tested and Proven",
    desc: "Countless engineers have gotten their dream jobs with its help.",
  },
]

export const HomePageTemplate = ({ title, sections }) => (
  <Container>
    <SEO title={title} />
    <Heading tag={1}>{title}</Heading>
    <Heading tag={2}>
      Carefully curated content to help you ace your next technical interview
    </Heading>
    <ImageContainer>
      <Image />
    </ImageContainer>

    <Heading tag={2}> Why Interview Book?</Heading>
    <Features>
      {features.map(({ name, desc }, index) => (
        <Feature key={index}>
          <Heading tag={4}>{name}</Heading>
          <p>{desc}</p>
        </Feature>
      ))}
    </Features>
  </Container>
)

const HomePage = ({ pageContext }) => {
  return (
    <HomePageTemplate
      {...safelyGetFrontMatter(pageContext)}
      isPreview={false}
    />
  )
}

export default HomePage
