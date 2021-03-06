import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Content, {HTMLContent} from '../components/Content';

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
}) => (
  <div className="mt0 helvetica">
    <div
      className="w-100 mt0 vh-50"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
      }}>
      {/* The double !! is to check if the value is truthy
           The childImageSharp is a node, which can be queried in graphql,
           Read more at 'https://www.gatsbyjs.org/docs/working-with-images/'*/}
      <h2
        className="f3 f2-l b mt0"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}>
        {title}
      </h2>
    </div>
    <section className="">
      <div className="">
        <div className="">
          <div className="">
            <div className="w-90 w-80-m w-70-l center pv3 pv4-l"></div>
          </div>

          <Features gridItems={intro.blurbs} />

          <div className="w-90 w-80-m w-70-l center pv3 pv4-l">
            <div className="">
              <div className="">
                <div className="">
                  <h3 className="f4 f3-l b">{main.heading}</h3>
                  <p>{main.description}</p>
                </div>
              </div>

              <div className="">
                <div className="flex flex-wrap">
                  <div className="w-100 w-50-l pa3">
                    <article className="">
                      <PreviewCompatibleImage imageInfo={main.image1} />
                    </article>
                  </div>

                  <div className="w-100 w-50-l pa3">
                    <article className="">
                      <PreviewCompatibleImage imageInfo={main.image2} />
                    </article>
                  </div>
                </div>

                <div className="w-100 pa3">
                  <article className="">
                    <PreviewCompatibleImage imageInfo={main.image3} />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

export const MarkdownTemplate = ({content, contentComponent}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="bg-light-gray helvetica">
      <div className="w-90 w-80-l center pv3 pv4-l">
        <div className="pa2 pa4-l">
          <PageContent className="content" content={content} />
        </div>
      </div>
    </section>
  );
};

MarkdownTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ProductPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;
  const {markdownRemark: post} = data;

  return (
    <Layout waveColor="bg-light-gray">
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
      <MarkdownTemplate contentComponent={HTMLContent} content={post.html} />

      <div
        className="bg-light-gray"
        style={{
          backgroundSize: `120px 1200px`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 20 200' style='enable-background:new 0 0 20 800;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .kf%7Bfill:%23FF6300;%7D %3C/style%3E %3Ctitle%3Ekoro-basic-fog-0%3C/title%3E %3Cpath class='kf' d='M0,800h800'/%3E %3Cpath class='kf' d='M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z'/%3E %3C/svg%3E ")`,
          backgroundPosition: `top`,
          backgroundRepeat: `repeat-x`,
          height: `20px`,
          width: `100%`,
          left: `0`,
          right: `0`,
          zIndex: `9`,
          marginTop: `auto`,
        }}></div>
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
