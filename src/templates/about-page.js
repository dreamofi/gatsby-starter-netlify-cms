import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Content, {HTMLContent} from '../components/Content';
import 'tachyons';

export const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="bg-light-gray helvetica">
      <div className="w-90 w-80-l center pv3 pv4-l">
        <div className="pa2 pa4-l">
          <h2 className="mv0 f3 b pa3 pt3">{title}</h2>
          <PageContent className="content" content={content} />
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
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

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }
`;
