
import React from 'react';
import { BlogPost } from '../types';
import { ArrowRightIcon } from '../constants';

interface BlogPostCardProps {
  post: BlogPost;
  openImageModal: (data: { 
    url: string; 
    title?: string; 
    description?: string;
    actionLink?: { href: string; text: string; target?: string; rel?: string; };
  }) => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, openImageModal }) => {
  const handleImageClick = () => {
    openImageModal({ 
      url: post.imageUrl, 
      title: post.title, 
      description: post.excerpt,
      actionLink: {
        href: post.link,
        text: "Read Full Blog",
        target: "_blank",
        rel: "noopener noreferrer"
      }
    });
  };

  return (
    <div className="bg-[#1a1a2e] rounded-xl shadow-2xl overflow-hidden group transform transition-all duration-300 hover:shadow-sky-500/30 hover:-translate-y-2"> {/* Updated shadow color */}
      <div 
        className="relative overflow-hidden aspect-video cursor-pointer"
        onClick={handleImageClick}
      >
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
         <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
            {post.category} &bull; {post.date}
          </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 hover:text-sky-400 transition-colors">
          <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
        <a 
            href={post.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center text-sky-400 font-medium group-hover:text-sky-300 transition-colors text-sm"
        >
          Read Full Blog <ArrowRightIcon className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;