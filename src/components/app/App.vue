<template>
  <div class="app font-monospace">
    <div class="content">
      <Appinfo
        :allMoviesCount="movies.length"
        :favouriteMoviesCount="favouriteCount"
      />
      <div class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilterVue
          :updateFilterHandler="updateFilterHandler"
          :filterName="filter"
        />
      </div>
      <template v-if="filteredMovies.length">
        <MovieList
          :movies="onFilterHandler(filteredMovies, filter)"
          @onLike="onLikeHandler"
          @onFavourite="onFavouriteHandler"
          @onRemove="onRemoveHandler"
        />
        <Box class="mt-5">
          <nav aria-label="pagination" class="d-flex justify-content-end mt-2">
            <ul class="pagination pagination-lg">
              <li
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page-item mx-1"
                :class="{ active: pageNumber == page }"
                @click="changePageHandler(pageNumber)"
              >
                <span class="page-link">{{ pageNumber }}</span>
              </li>
            </ul>
          </nav>
        </Box>
      </template>
      <template v-else>
        <div v-if="!movies.length && !isLoading" class="no-data">
          <h2 class="text-center text-uppercase text-danger fw-bold">
            No movies add
          </h2>
        </div>
        <Box v-if="isLoading" class="mt-5 d-flex justify-content-center">
          <Loader />
        </Box>
        <div class="no-data" v-else>
          <img
            src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
            alt="No data"
          />
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
import axios from "axios";
import PrimaryButton from "@/ui-components/PrimaryButton.vue";
import Loader from "../../ui-components/Loader.vue";

export default {
  components: {
    Appinfo,
    SearchPanel,
    AppFilterVue,
    MovieList,
    MovieAddForm,
    PrimaryButton,
    Loader,
  },
  data() {
    return {
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
      limit: 10,
      page: 1,
      totalPages: 0,
    };
  },
  methods: {
    async createMovie(item) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          item
        );

        console.log(response);
        this.movies.push({
          id: response.data.id,
          name: item.name,  
          viewers: item.viewers,
          like: item.like,
          favourite: item.favourite
        });
      } catch (error) {
        console.log(`output-error`, error);
      }
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
    async onRemoveHandler(id) {
      try {
        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(response);
        this.movies = this.movies.filter((c) => c.id !== id);
      } catch (error) {
        alert(error.message);
      }
    },
    onSearchHandler(arr, term) {
      if (term.length === 0) {
        return arr;
      }
      return arr.filter((c) => c.name.toLowerCase().indexOf(term) > -1);
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((c) => c.like);
        case "mostViewed":
          return arr.filter((c) => c.seen > 310);
        case "favourite":
          return arr.filter((c) => c.favourite);
        default:
          return arr;
      }
    },
    updateTermHandler(term) {
      this.term = term;
    },
    updateFilterHandler(filter) {
      this.filter = filter;
    },
    async fetchMovie() {
      try {
        this.isLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _limit: this.limit,
                _page: this.page,
              },
            }
          );
          const newArr = response.data.map((item) => ({
            id: item.id,
            name: item.title,
            like: false,
            favourite: false,
            seen: item.id * 10,
          }));

          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.movies = newArr;
          this.isLoading = false;
        }, 1000);
      } catch (error) {
        console.log(`output-error`, error);
      }
    },
    changePageHandler(page) {
      this.page = page;
      this.fetchMovie();
    },
  },
  mounted() {
    this.fetchMovie();
  },
  watch: {
    page() {
      this.fetchMovie();
    },
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

.page-item {
  width: 35px;
  height: 35px;
}

.page-link {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
