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
        <section className="bg-near-white">
          <div className="">
            <div className="w-90 w-80-m w-70-l center pv3 pv4-l">
              <BlogRoll />
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
