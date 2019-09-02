import React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="mt0 helvetica vh-50"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
          }}>
          <h1
            className="f3 f2-l b mt0"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}>
            Tin mới nhất
          </h1>
        </div>
        <section className="">
          <div className="">
            <div className="w-90 w-80-m w-70-l center pv3 pv4-l">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
