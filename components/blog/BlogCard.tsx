import React from 'react';
import Image from 'next/image';
import { Blog } from '@/lib/blog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <Badge variant="outline" className="mb-2">{blog.category}</Badge>
        <CardTitle className="text-xl font-semibold mb-2">{blog.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{blog.description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
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
            <p className="text-sm font-medium text-foreground">{blog.author}</p>
            <p className="text-xs text-muted-foreground">{blog.authorRole}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}; 