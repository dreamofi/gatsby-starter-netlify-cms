import React from 'react';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import Layout from '../../components/Layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: {group},
    site: {
      siteMetadata: {title},
    },
  },
}) => (
  <Layout>
    <section className="bg-near-white">
      <Helmet title={`Tags | ${title}`} />
      <div className="w-90 w-80-m w-70-l center pv3 pv5-l helvetica">
        <div className="">
          <div className="mb5">
            <h1 className="">Tags</h1>
            <ul className="">
              {group.map(tag => (
                <li className="list dib pa3 f5 f4-l" key={tag.fieldValue}>
                  <Link
                    className="link"
                    to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
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

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
