<template>
  <div class="col-12 line mt-2 d-flex">
    <img class="smol mb-2" :src="blog.imgUrl" :alt="blog.title">
    <h1 class="d-flex align-items-center ml-3">
      {{ blog.title }}
    </h1>
  </div>
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
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.line{
 border-bottom: 2px solid black
}
.smol{
  height: 100px;
  width: 100px;
  object-fit: cover;
}
</style>
