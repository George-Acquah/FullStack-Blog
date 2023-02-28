import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  // Submit a post
  @Post('/post')
  async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
    const newPost = await this.blogService.addPost(createPostDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been submitted successfully!',
      post: newPost,
    });
  }

  //Get a specific post by ID
  @Get('/post/:postID')
  // eslint-disable-next-line prettier/prettier
  async getPostByID(@Res() res, @Param('postID' , new ValidateObjectId()) postID: string) {
    const post = await this.blogService.getPostByID(postID);
    if (!post) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been fetched successfully!',
      post: post,
    });
  }

  //Get all posts
  @Get('/posts')
  async getAllPosts(@Res() res) {
    const posts = await this.blogService.getAllPosts();
    return res.status(HttpStatus.OK).json({
      message: 'Posts has been fetched successfully!',
      posts: posts,
    });
  }

  //Edit a post
  @Put('/edit')
  async updatePost(
    @Res() res,
    @Query('postID', new ValidateObjectId()) postID,
    @Body() updatePostDTO: CreatePostDTO,
  ) {
    const editPost = await this.blogService.updatePost(postID, updatePostDTO);
    if (!editPost) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been updated successfully!',
      post: editPost,
    });
  }

  //Delete a post
  @Delete('/delete')
  async deletePost(
    @Res() res,
    @Param('postID', new ValidateObjectId()) postID: string,
  ) {
    const deletePost = await this.blogService.deletePost(postID);
    if (!deletePost) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted successfully!',
      post: deletePost,
    });
  }
}
