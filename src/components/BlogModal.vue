<template>
  <div class="modal fade"
       :id="'blog-modal-' +blog.id "
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="w-100 text-center">
            {{ blog.title }}
          </h1>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <img class="w-100" :src="blog.imgUrl" :alt="blog.title">
              </div>
              <div class="col-md-6 side-bar-scroll">
                <p>{{ blog.body }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogModal',
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
// .modal-backdrop.show{
// opacity: 1!important;
// background: var(--fade);
// backdrop-filter: blur(30px) brightness(.5) contrast (.85);
// }
.side-bar-scroll{
  overflow-y: auto;
  height: 65vh;
}
img{
max-height: 65vh;
width: 100%;
object-fit: contain;
}
</style>
