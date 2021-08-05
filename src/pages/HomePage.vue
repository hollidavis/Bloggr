<template>
  <div class="home container">
    <Blogs :blogs="blogs" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { blogsService } from '../services/BlogsService'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await blogsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
// .home{
//   text-align: center;
//   user-select: none;
//   > img{
//     height: 200px;
//     width: 200px;
//   }
// }
</style>
