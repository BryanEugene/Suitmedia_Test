import { useState } from 'react';
import { Idea } from '@/types/api';

interface PostCardProps {
  idea: Idea;
}

const PostCard = ({ idea }: PostCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getImageUrl = () => {
    if (idea.small_image && idea.small_image.length > 0) {
      return idea.small_image[0].url;
    }
    return '/placeholder.svg';
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container with consistent aspect ratio */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}
        
        <img
          src={getImageUrl()}
          alt={idea.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        
        {imageError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-sm">Image not available</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <time className="text-sm text-muted-foreground">
          {formatDate(idea.published_at)}
        </time>
        
        <h3 className="mt-2 font-semibold text-lg leading-tight line-clamp-3 text-foreground">
          {idea.title}
        </h3>
      </div>
    </article>
  );
};

export default PostCard;