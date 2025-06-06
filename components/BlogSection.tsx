
import React from 'react';
import Section from './Section';
import BlogPostCard from './BlogPostCard';
import { BLOG_DATA } from '../constants';
import Button from './Button';
import { ArrowRightIcon } from '../constants';

interface BlogSectionProps {
  openImageModal: (data: { 
    url: string; 
    title?: string; 
    description?: string;
    actionLink?: { href: string; text: string; target?: string; rel?: string; };
  }) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ openImageModal }) => {
  return (
    <Section 
      id="blog" 
      title="Latest Blogs" 
      subtitle="News & Insights" 
      nextSectionId="#contact" // Add next section ID
    >
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
        Celebrating creativity, innovation, and excellence in design. I am honored to have received recognition for my work across various platforms and competitions.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_DATA.map((post) => (
          <BlogPostCard key={post.id} post={post} openImageModal={openImageModal} />
        ))}
      </div>
      <div className="text-center mt-16">
        <Button href="#" variant="outline" size="lg" icon={<ArrowRightIcon />}>
          See More Blogs
        </Button>
      </div>
    </Section>
  );
};

export default BlogSection;