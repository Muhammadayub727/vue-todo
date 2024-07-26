<template>
  <div class="app-info">
    <p class="fs-3 text-uppercase">Number of all Movies:{{ allMoviesCount }}</p>
    <p class="fs-4 text-uppercase">
      Number of movies viewed:{{ favouriteMoviesCount }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    allMoviesCount: {
      type: Number,
      requied: true,
    },
    favouriteMoviesCount: {
      type: Number,
      requied: true,
    },
  },

};
</script>

<style scoped>
.app-info {
  padding: 1.5rem;
  border-radius: 4px;
  background: #fcfaf5;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>