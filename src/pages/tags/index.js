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
