<template>
  <div class="col-12 line mt-2 d-flex" data-toggle="modal" :data-target="'#blog-modal-' +blog.id ">
    <img class="mb-2 small-img" :src="blog.imgUrl" :alt="blog.title">
    <h1 class="d-flex align-items-center ml-3">
      {{ blog.title }}
    </h1>
    <div class="w-100 d-flex justify-content-end" v-if="account.id === blog.creatorId">
      <button type="button" class="btn btn-danger h-25" @click.stop="destroy">
        X
      </button>
    </div>
  </div>
  <BlogModal :blog="blog" />
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { blogsService } from '../services/BlogsService'
export default {
  name: 'BlogCard',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await blogsService.destroy(props.blog.id)
            Pop.toast('Delorted!', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.line{
 border-bottom: 2px solid black
}
.small-img{
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
