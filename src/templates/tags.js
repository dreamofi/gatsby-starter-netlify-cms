import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li className="list" key={post.node.fields.slug}>
        <Link className="link" to={post.node.fields.slug}>
          <h2 className="f4 f3-l">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} bài được gắn tag “${tag}”`;

    return (
      <Layout>
        <section className="helvetica bg-near-white">
          <Helmet title={`${tag} | ${title}`} />
          <div className="w-90 w-80-m w-70-l center pv3 pv4-l">
            <div className="db w-100">
              <div className="mb5">
                <h3 className="f4 f3-l">{tagHeader}</h3>
                <ul className="pv3">{postLinks}</ul>
                <p>
                  <Link className="link f4" to="/tags/">
                    Xem tất cả các tag
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="bg-near-white"
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
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
