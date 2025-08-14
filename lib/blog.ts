import { ObjectId } from 'mongodb';

export interface Blog {
  _id?: ObjectId;
  id?: number;
  title: string;
  image: string;
  category: string;
  description: string;
  author: string;
  authorImage: string;
  authorRole: string;
  readTime: string;
  date: string;
  tags: string[];
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateBlogData {
  title: string;
  image: string;
  category: string;
  description: string;
  author: string;
  authorImage: string;
  authorRole: string;
  readTime: string;
  date: string;
  tags: string[];
  content: string;
}

export interface UpdateBlogData extends Partial<CreateBlogData> {
  _id: string;
} 