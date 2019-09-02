import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import GForm from '../components/gform';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import 'tachyons';

{
  /*CREATE TEMPLATE FOR INDEX PAGE*/
}

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
  <div>
    <div
      className="db flex flex-column items-center justify-center w-100 helvetica"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        height: `70vh`,
      }}>
      <div className="db flex flex-column items-center justify-center helvetica">
        <h1
          className="f3 f1-l f2-m tc"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgba(255, 68, 0,0.7)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}>
          {title}
        </h1>
        <h3
          className="f4 f3-l tc"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgba(255, 68, 0,0.7)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}>
          {subheading}
        </h3>
      </div>
    </div>

    <section className="">
      <div className="">
        <div className="">
          <div className="helvetica">
            <div className="w-90 w-80-m w-70-l center pv4 pv5-l">
              <div className="tc">
                <h1 className="f3 f-subheadline-l lh-title ttu">
                  {mainpitch.title}
                </h1>
                <div className="h1">
                  <div className="h-25 w4 bg-orange center"></div>
                </div>
              </div>

              <div className="f6 f5-l">
                <h3 className="fw4">{mainpitch.description}</h3>
              </div>
            </div>

            <div className="">
              <div className="w-90 w-80-m w-70-l center p2 pt3-l">
                <h3 className="f4 f3-l">{heading}</h3>

                <p className="f6 f5-l">{description}</p>
              </div>
            </div>

            <Features gridItems={intro.blurbs} />

            <div className="db mw6 ma3 tc pa4 pb5 center">
              <Link
                className="db link orange b ba bw2 tc br3 center pa2 pa3-l  bg-animate hover-bg-orange hover-white b--orange"
                to="/products">
                Xem chi tiết dịch vụ
              </Link>
            </div>

            <div className="bg-light-gray">
              <div className="w-90 w-80-l center pv4 pv5-l">
                <h2 className="f3 f2-l lh-title ttu tc helvetica">
                  Tin mới nhất
                </h2>
                <div className="h1">
                  <div className="h-25 w4 bg-orange center mb2"></div>
                </div>

                <BlogRoll />

                <div className="ma3 mw6 mb4 tc pa2 pa4-l center">
                  <Link
                    className="db link white bg-orange b ba bw2 tc br3 center pa2 pa3-l bg-animate hover-bg-white hover-orange b--orange"
                    to="/blog">
                    Xem thêm tin bài
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex bg-near-white pv3 pv5-l">
              <div className="w-90 w-80-m w-70-l center pv2 pv3-l">
                <h3 className="f4 f3-l b pt2">{main.heading}</h3>

                <p className="f5 f4-l">{main.description}</p>
              </div>
            </div>

            <div className="bg-near-white pb4 pb5-l">
              <div className="w-90 w-80-l center pb3">
                <div className="flex flex-wrap w-100 items-center justify-center">
                  <article className="w-100 w-50-l pa2">
                    <PreviewCompatibleImage imageInfo={main.image1} />
                  </article>

                  <article className="w-100 w-50-l pa2">
                    <PreviewCompatibleImage imageInfo={main.image2} />
                  </article>

                  <article className="w-100 w-50-l pa2">
                    <PreviewCompatibleImage imageInfo={main.image3} />
                  </article>

                  <article className="w-100 w-50-l pa2">
                    <PreviewCompatibleImage imageInfo={main.image4} />
                  </article>
                </div>
              </div>
            </div>

            <GForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
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
        subheading
        mainpitch {
          title
          description
        }
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
          image4 {
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
