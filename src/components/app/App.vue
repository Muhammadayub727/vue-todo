<!-- <template>
  <div class="app font-monospace">
    <div class="content">
      <Appinfo
        :allMoviesCount="movies.length"
        :favouriteMoviesCount="favouriteCount"
      />
      <div class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler"/>
        <AppFilterVue />
      </div>
      <MovieList :movies="onSearchHandler(movies,term)" @onLike="onLikeHandler" @onFavourite="onFavouriteHandler" @onRemove="onRemoveHandler"/>
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
          name: " Godfather",
          seen: 701,
          favourite: false,
          like: false,
        },
        {
          id: 2,
          name: " Shawshank Redemption",
          seen: 712,
          favourite: false,
          like: false,
        },
        {
          id: 3,
          name: " Godfather: Part II",
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
      term:'',
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
    onRemoveHandler(id) {
      console.log(id);
      this.movies = this.movies.filter(c => c.id != id);
    },

    onSearchHandler(arr,term) {
      if (term.length === 0) {
        return arr
      }
      return arr.filter((c) => c.name.toLowerCase().indexOf(term) > -1)
    },

    updateTermHandler(term){
      this.term = term
    }
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
</style> -->
<template>
  <div class="app font-monospace">
    <div class="content">
      <Appinfo
        :allMoviesCount="movies.length"
        :favouriteMoviesCount="favouriteCount"
      />
      <div class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilterVue />
      </div>
      <template v-if="filteredMovies.length">
        <MovieList
          :movies="filteredMovies"
          @onLike="onLikeHandler"
          @onFavourite="onFavouriteHandler"
          @onRemove="onRemoveHandler"
        />
      </template>
      <template v-else>
        <div class="no-data">
          <!-- <p>No data found</p> -->
          <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="No data" />
        </div>
      </template>
      <MovieAddForm @createMovie="createMovie" />
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
        { id: 1, name: "Godfather", seen: 701, favourite: false, like: false },
        { id: 2, name: "Shawshank Redemption", seen: 712, favourite: false, like: false },
        { id: 3, name: "Godfather: Part II", seen: 702, favourite: false, like: false },
        { id: 4, name: "Pulp Fiction", seen: 771, favourite: false, like: false },
      ],
      term: '',
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
      this.movies = this.movies.filter(c => c.id !== id);
    },
    onSearchHandler(arr, term) {
      if (term.length === 0) {
        return arr;
      }
      return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1);
    },
    updateTermHandler(term) {
      this.term = term;
    },
  },
  computed: {
    favouriteCount() {
      return this.movies.filter(c => c.favourite).length;
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
  height:250px;
  border-radius: 10px;
  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
