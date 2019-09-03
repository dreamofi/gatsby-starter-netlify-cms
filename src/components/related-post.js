import React from 'react';
import {Link, StaticQuery, graphql} from 'gatsby';
import PropTypes from 'prop-types';

// import {SimilarArticlesFactory} from './SimilarArticlesFactory';

//Just render everything here, need to fix the code

//Todo: filter all posts different from current post, may need to update the query for the single markdown

export const SimilarPosts = props => {
  const {data} = props;
  const {edges: posts} = data.posts;
  const {curId, curTag} = props;
  const maxSimilarPost = 4;

  //Reduce tag to score
  const tagScore = score =>
    score
      .map(instance => (curTag.includes(instance) ? 1 : 0))
      .reduce((totalScore, currentScore) => totalScore + currentScore);

  //Get list of posts with tagScore > 0 and ID and slug
  const postList =
    posts &&
    posts
      .map(({node: post}) => [
        post.id,
        post.fields.slug,
        post.frontmatter.title,
        tagScore(post.frontmatter.tags),
      ])
      .filter(post => post[0] !== curId && post[3] > 0);

  //Extract the tags from postLish
  const tagScoreList = postList.map(curValue => curValue[3]);

  //Get the index of the values in the tagScoreList
  const tagScoreIndex = tagScoreList.map((curValue, index) => index);

  //Sort the tagScoreIndex using the tagScoreList
  const tagScoreIndexSort = tagScoreIndex
    .slice()
    .sort((a, b) => tagScoreList.indexOf(a) - tagScoreList.indexOf(b));

  //Get the final list
  const sortPostList = tagScoreIndexSort
    .map(curValue => postList[curValue])
    .filter((curValue, index) => index < maxSimilarPost);
  console.log(sortPostList);

  return (
    <div className="helvetica pt2 w-90 w-80-m w-70-l center pv3 pv4-l">
      {!!sortPostList.length && (
        <div className="db b pb3">Các tin liên quan</div>
      )}
      {posts &&
        sortPostList.map(curPost => (
          <div className="pv2 ph3 ph4-ns" key={curPost[0]}>
            <Link to={curPost[1]} className="link">
              {' '}
              {curPost[2]}{' '}
            </Link>
          </div>
        ))}
    </div>
  );
};

// (1.) Query for articles
export default props => (
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
    render={data => <SimilarPosts data={data} {...props} />}
  />
);

SimilarPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
