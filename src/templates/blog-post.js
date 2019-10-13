import React from 'react';
import PropTypes from 'prop-types';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import Content, {HTMLContent} from '../components/Content';
import 'tachyons';
import SimilarPosts from '../components/related-post.js';

//Create template for the blog page
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="helvetica">
      {helmet || ''}
      <div className="">
        <div className="">
          <div className="w-90 w-80-m w-70-l center pv3 pv4-l">
            <h1 className="f3 f1-l b">{title}</h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div className="mt4">
                <h4>Tags</h4>
                <ul className="flex flex-wrap list">
                  {tags.map(tag => (
                    <li key={tag + `tag`} className="db pa2">
                      <Link to={`/tags/${kebabCase(tag)}/`} className="link">
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

//For propTypes check of the template
BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

// Render the whole blog page
const BlogPost = ({data}) => {
  const {markdownRemark: post} = data;
  //Get current post ID and Tag for returning similar posts
  const curId = post.id;
  const curTag = post.frontmatter.tags;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <SimilarPosts curId={curId} curTag={curTag} />
      <div
        className="white"
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

//Proptypes for Blog page
BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

//Query for the page
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
