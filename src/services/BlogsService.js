import { api } from './AxiosService'
import { convertToQuery } from '../utils/Query'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'

class BlogsService {
  async getAll(query = {}) {
    const res = await api.get('api/blogs' + convertToQuery(query))
    AppState.blogs = res.data
  }

  async createBlog(newBlog) {
    await api.post('api/blogs', newBlog)
    await this.getAll()
  }
}

export const blogsService = new BlogsService()
