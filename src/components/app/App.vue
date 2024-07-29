<template>
  <div class="app font-monospace">
    <div class="content">
      <Appinfo
        :allMoviesCount="movies.length"
        :favouriteMoviesCount="favouriteCount"/>
      <div class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilterVue :updateFilterHandler="updateFilterHandler" :filterName="filter"/>
      </div>
      <template v-if="filteredMovies.length">
        <MovieList
          :movies="onFilterHandler(filteredMovies, filter)"
          @onLike="onLikeHandler"
          @onFavourite="onFavouriteHandler"
          @onRemove="onRemoveHandler"
        />
      </template>
      <template v-else>
        <div class="no-data">
          <img
            src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
            alt="No data"
          />
        </div>
      </template>
      <!-- <div v-if="filter == 'all'">Filter all</div> -->
      <MovieAddForm @createMovie="createMovie"/>
    </div>
  </div>
</template>

<script>
import Appinfo from "../app-info/Appinfo.vue";
import SearchPanel from "../search-panel/SearchPanel.vue";
import AppFilterVue from "../app-filter/AppFilter.vue";                                                                                                                                                                                                                                                                                              
import MovieList from "../movie-list/MovieList.vue";
import MovieAddForm from "../movie-add-form/MovieAddForm.vue";
import axios from "axios";
import PrimaryButton from "@/ui-components/PrimaryButton.vue";

export default {
  components: {
    Appinfo,
    SearchPanel,
    AppFilterVue,
    MovieList,
    MovieAddForm,
    PrimaryButton
},
  data() {
    return {
      movies: [],
      term: "",
      filter: 'all',
    };
  },
  methods: {
    createMovie(item) {
      this.movies.push(item);
    },
    onLikeHandler(id) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          item.like = !item.like;
        }
        return item;
      });
    },
    onFavouriteHandler(id) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          item.favourite = !item.favourite;
        }
        return item;
      });
    },
    onRemoveHandler(id) {
      this.movies = this.movies.filter((c) => c.id !== id);
    },
    onSearchHandler(arr, term) {
      if (term.length === 0) {
        return arr;
      }
      return arr.filter((c) => c.name.toLowerCase().indexOf(term) > -1);
    },
    onFilterHandler(arr,filter) {
      switch (filter) {
        case 'popular':
          return arr.filter((c) => c.like);
        case 'mostViewed':
          return arr.filter((c) => c.seen > 500);
        case 'favourite':
          return arr.filter((c) => c.favourite);
        default:
          return arr
      }
    },
    updateTermHandler(term) {
      this.term = term;
    },
    updateFilterHandler(filter) {
      this.filter = filter
    },

    async fetchMovie(){
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const newArr = data.map(item => ({
          id : item.id,
          name : item.title,
          like : false,
          favourite : false,
          seen : item.id * 77
        }))
        this.movies = newArr
      } catch (error) {
        console.log(`output-error`,error )
      }
    },
  },
  mounted() {
    this.fetchMovie()
  },
  computed: {
    favouriteCount() {
      return this.movies.filter((c) => c.favourite).length;
    },
    filteredMovies() {
      return this.onSearchHandler(this.movies, this.term);
    },
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
.no-data {
  text-align: center;
  margin-top: 2rem;
}

.no-data img {
  width: 1000px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
