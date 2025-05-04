import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../common/Section';
import usePageTitle from '../hooks/usePageTitle';
import Sidebar from '../sidebar/Sidebar';
import PageTitleBar from '../titlebar/PageTitleBar';
import Button from '../ui/Button';
import metadata from '/src/content/Blog/metadata.json'; // Import metadata

const Blog = () => {
  usePageTitle('Blog');
  return (
    <>
      <PageTitleBar title="Blog" />
      <Section baseId="body" role="main">
        <Section.Row collapse={1050}>
          <Section.Cell span={16}>
            <div className="page-content">
              <div className="post-list">
                {metadata.length > 0 ? (
                  metadata.map((post) => (
                    <div className="post" key={post.slug}>
                      <h2>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <div className="post-date">{post.date}</div>
                      <p>{post.content.slice(0, 250)}...</p>
                      <Button to={`/blog/${post.slug}`}>Read More</Button>
                    </div>
                  ))
                ) : (
                  <p>No blog posts available.</p>
                )}
              </div>
            </div>
          </Section.Cell>
          <Section.Cell span={8} role="complementary">
            <Sidebar />
          </Section.Cell>
        </Section.Row>
      </Section>
    </>
  );
};

export default Blog;
