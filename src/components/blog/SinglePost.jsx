import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import Section from '../common/Section';
import Sidebar from '../sidebar/Sidebar';
import PageTitleBar from '../titlebar/PageTitleBar';
import metadata from '/src/content/Blog/metadata.json'; // Import preprocessed metadata

const SinglePost = () => {
  const { slug } = useParams();

  // Find the post by slug in the metadata
  const post = metadata.find((item) => item.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <PageTitleBar title={post.title} />
      <Section baseId="body" role="main">
        <Section.Row collapse={1050}>
          <Section.Cell span={16}>
            <div className="page-content">
              <div className="post-date">{post.date}</div>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
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

export default SinglePost;
