<template>
  <Box class="app-info">
    <div>
      <p class="fs-3 text-uppercase">Number of all Movies:{{ allMoviesCount }}</p>
      <p class="fs-4 text-uppercase">
        Number of movies viewed:{{ favouriteMoviesCount }}
      </p>
    </div>
  </Box>
</template>
<script>
// import Box from "@/ui-components/Box.vue";
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
  // components: {
  //   Box,
  // },

};
</script>

<style scoped>

</style>