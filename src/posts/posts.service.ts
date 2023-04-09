import { Injectable } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Post } from './posts.model'
import { FilesService } from '../files/files.service'

@Injectable()
export class PostsService {
	constructor(
		@InjectModel(Post) private postRepository: typeof Post,
		private filesService: FilesService,
	) {}

	async createPost(postDto: CreatePostDto, image: any) {
		const fileName = await this.filesService.createFile(image)
		return await this.postRepository.create({ ...postDto, image: fileName })
	}

	async getPostByUserId(userId: number) {
		return await this.postRepository.findOne({ where: { userId } })
	}
}
