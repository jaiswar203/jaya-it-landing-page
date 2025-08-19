'use client'

import React from 'react';
import Image from 'next/image';
import { Blog } from '@/lib/blog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useAnalytics } from '@/hooks/use-analytics';

interface BlogCardProps {
  blog: Blog;
}

// Skeleton component for loading state
export const BlogCardSkeleton: React.FC = () => {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
      <CardHeader className="p-0">
        <AspectRatio ratio={16/9} className="w-full rounded-t-lg overflow-hidden">
          <Skeleton className="w-full h-full" />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <Skeleton className="h-5 w-20 mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-4" />
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-1" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex items-center">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="ml-3 space-y-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { trackCustomEvent } = useAnalytics()

  // Function to trim text to a specific length
  const trimText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const handleBlogCardClick = () => {
    trackCustomEvent('blog_interaction', {
      blog_title: blog.title,
      blog_category: blog.category,
      blog_author: blog.author,
      interaction_type: 'blog_card_click',
      blog_read_time: blog.readTime,
      blog_date: blog.date
    })
  }

  const handleBlogCardHover = () => {
    trackCustomEvent('blog_interaction', {
      blog_title: blog.title,
      blog_category: blog.category,
      blog_author: blog.author,
      interaction_type: 'blog_card_hover',
      blog_read_time: blog.readTime,
      blog_date: blog.date
    })
  }

  return (
    <Card 
      className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer"
      onClick={handleBlogCardClick}
      onMouseEnter={handleBlogCardHover}
    >
      <CardHeader className="p-0">
        <AspectRatio ratio={16/9} className="w-full rounded-t-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex-grow p-6 flex flex-col">
        <Badge variant="outline" className="mb-2 w-fit">{blog.category}</Badge>
        <CardTitle className="text-xl font-semibold mb-2 line-clamp-2">
          {trimText(blog.title, 60)}
        </CardTitle>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {trimText(blog.description, 120)}
        </p>
        <div className="flex items-center text-sm text-muted-foreground mt-auto">
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{blog.readTime}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src={blog.authorImage} alt={blog.author} />
            <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-medium text-foreground line-clamp-1">
              {trimText(blog.author, 20)}
            </p>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {trimText(blog.authorRole, 25)}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}; 