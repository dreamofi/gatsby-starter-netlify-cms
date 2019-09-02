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
