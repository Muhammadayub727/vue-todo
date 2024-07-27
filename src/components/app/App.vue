<template>
  <div class="app font-monospace">
    <div class="content">
      <Appinfo
        :allMoviesCount="movies.length"
        :favouriteMoviesCount="favouriteCount"
      />
      <div class="search-panel">
        <SearchPanel />
        <AppFilterVue />
      </div>
      <MovieList :movies="movies" @onLike="onLikeHandler" @onFavourite="onFavouriteHandler"/>
      <MovieAddForm  @createMovie="createMovie"/>
    </div>
  </div>
</template>

<script>
import Appinfo from "../app-info/Appinfo.vue";
import SearchPanel from "../search-panel/SearchPanel.vue";
import AppFilterVue from "../app-filter/AppFilter.vue";
import MovieList from "../movie-list/MovieList.vue";
import MovieAddForm from "../movie-add-form/MovieAddForm.vue";

export default {
  components: {
    Appinfo,
    SearchPanel,
    AppFilterVue,
    MovieList,
    MovieAddForm,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: "The Godfather",
          seen: 701,
          favourite: false,
          like: false,
        },
        {
          id: 2,
          name: "The Shawshank Redemption",
          seen: 712,
          favourite: false,
          like: false,
        },
        {
          id: 3,
          name: "The Godfather: Part II",
          seen: 702,
          favourite: false,
          like: false,
        },
        {
          id: 4,
          name: "Pulp Fiction",
          seen: 771,
          favourite: false,
          like: false,
        },
      ],
    };
  },
  methods: {
    createMovie(item) {
      this.movies.push(item);
    },
    onLikeHandler(id) {
      console.log(id);
      this.movies = this.movies.map((item) => {
        if (item.id == id) {
          item.like = !item.like;
        }
        return item;
      });
    },
    onFavouriteHandler(id) {
      console.log(id);
      this.movies = this.movies.map((item) => {
        if (item.id == id) {
          item.favourite = !item.favourite;
        }
        return item;
      });
    },
  },
  computed: {
    favouriteCount() {
      return this.movies.filter((c) => c.favourite).length;
    },
  },
  mounted() {
    console.log("favouriteCount");
  },
};
</script>

<style scoped>
.app {
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 720px;
  background-color: #fff;
  border-radius: 7px;
  padding: 5rem 0;
  margin: 0 auto;
  /* box-shadow: 0 0 10px 10px #ccc; */
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
