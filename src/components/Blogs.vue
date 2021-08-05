<template>
  <div class="row">
    <BlogCard v-for="b in blogs" :key="b.id" :blog="b" />
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>
