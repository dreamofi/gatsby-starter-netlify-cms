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
      className="flex flex-column items-center justify-center w-100 helvetica"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        height: `70vh`,
      }}>
      <div className="flex flex-column items-center justify-center helvetica">
        <h1
          className="f3 f1-l f2-m"
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
            <div className="w-90 w-80-m w-70-l center pt5">
              <div className="tc">
                <h1 className="f1 b ttu">{mainpitch.title}</h1>
                <div className="h1">
                  <div className="h-25 w4 bg-orange center"></div>
                </div>
              </div>

              <div className="f5">
                <h3 className="fw4">{mainpitch.description}</h3>
              </div>
            </div>

            <div className="">
              <div className="w-90 w-80-m w-70-l center">
                <h3 className="f3">{heading}</h3>

                <p className="f4">{description}</p>
              </div>
            </div>

            <Features gridItems={intro.blurbs} />

            <div className="ma3 mv4 b orange tc dim">
              <div className="tc ba pa3 bw2 w-50 tc center br3">
                <Link className="link orange b" to="/products">
                  Xem tất cả dịch vụ
                </Link>
              </div>
            </div>

            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">
                Tin mới nhất
              </h3>

              <BlogRoll />

              <div className="column is-12 tc">
                <Link className="btn" to="/blog">
                  Xem thêm
                </Link>
              </div>
            </div>

            <div className="columns">
              <div className="column is-7">
                <h3 className="f3 b">{main.heading}</h3>

                <p className="f4">{main.description}</p>
              </div>
            </div>

            <div className="w-100">
              <div className="w-100">
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
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
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
