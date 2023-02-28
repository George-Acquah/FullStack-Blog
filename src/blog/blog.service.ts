import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private postModel: Model<Post>) {}
  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = await this.postModel.create(createPostDTO);
    return newPost.save();
  }
  async getPostByID(postID: string): Promise<Post> {
    const post = await this.postModel.findById(postID).exec();
    return post;
  }
  async getAllPosts(): Promise<Post[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }
  // eslint-disable-next-line prettier/prettier
  async updatePost( postID: string, updatePostDTO: CreatePostDTO ): Promise<Post> {
    // eslint-disable-next-line prettier/prettier
    const editedPost = await this.postModel
    .findByIdAndUpdate( postID, updatePostDTO, { new: true, });
    return editedPost;
  }
  async deletePost(postID: string): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndRemove(postID);
    return deletedPost;
  }
}
