import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    return (
      <div className="flex flex-wrap helvetica mid-gray pt2">
        {posts &&
          posts.map(({node: post}) => (
            <div
              className="flex flex-wrap w-50-m w-third-l pa3 items-stretch justify-center"
              key={post.id}>
              <article
                className={`flex flex-wrap pa3 ba br3 b--moon-gray items-stretch justify-center ${
                  post.frontmatter.featuredpost
                    ? 'bg-washed-yellow'
                    : 'bg-white'
                }`}>
                <header className="flex flex-wrap items-stretch justify-center w-100">
                  {post.frontmatter.featuredimage ? (
                    <div className="w-100">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="db w-100 ph2">
                    <Link
                      className="db f4 b dim link mid-gray pb2"
                      to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span className="db w-100 f5">{post.frontmatter.date}</span>
                  </p>
                </header>
                <p className="db ph2">
                  {post.excerpt}
                  <br />
                  <br />
                </p>
                <Link
                  className="db dim link dark-green b self-end"
                  to={post.fields.slug}>
                  Xem chi tiết →
                </Link>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "[Ngày viết: ]DD[/]MM[/]YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
