import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../common/Pagination'; // Import Pagination component
import Section from '../common/Section';
import usePageTitle from '../hooks/usePageTitle';
import Sidebar from '../sidebar/Sidebar';
import PageTitleBar from '../titlebar/PageTitleBar';
import Button from '../ui/Button';
import metadata from '/src/content/Blog/metadata.json'; // Import metadata

const POSTS_PER_PAGE = 5;

const Blog = () => {
  usePageTitle('Blog');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(metadata.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = metadata.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <PageTitleBar title="Blog" />
      <Section baseId="body" role="main">
        <Section.Row collapse={1050}>
          <Section.Cell span={16}>
            <div className="page-content">
              <div className="post-list">
                {currentPosts.length > 0 ? (
                  currentPosts.map((post) => (
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
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
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
