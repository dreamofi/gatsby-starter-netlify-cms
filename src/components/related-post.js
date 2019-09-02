import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import PropTypes from 'prop-types';

// import {SimilarArticlesFactory} from './SimilarArticlesFactory';

//Just render everything here, need to fix the code

class SimilarPosts extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.posts;
    const currentSlug = posts[0];
    console.log(currentSlug);

    //Todo: filter all posts different from current post, may need to update the query for the single markdown

    return (
      <div className="helvetica mid-gray pt2">
        <div className="db">Các tin liên quan</div>
        {posts &&
          posts.map(({node: post}) => (
            <div className="pa2 pa3-ns" key={post.id}>
              {post.frontmatter.title}
            </div>
          ))}
      </div>
    );
  }
}

// (1.) Query for articles
export default () => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {
        posts: allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                description
                tags
              }
              id
            }
          }
        }
      }
    `}
    render={data => <SimilarPosts data={data} />}
  />
);

SimilarPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
