<template>
  <div class="col-12 line mt-2 d-flex" data-toggle="modal" :data-target="'#blog-modal-' +blog.id ">
    <img class="smol mb-2" :src="blog.imgUrl" :alt="blog.title">
    <h1 class="d-flex align-items-center ml-3">
      {{ blog.title }}
    </h1>
  </div>
  <BlogModal :blog="blog" />
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.line{
 border-bottom: 2px solid black
}
.smol{
  height: 150px;
  width: 150px;
  object-fit: cover;
}
</style>
