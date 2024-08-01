  <template>
    <div class="movie-add-form">
      <h1>Add Movie</h1>
      <form class="add-form d-flex" @submit.prevent="addMovie">
        <input
          type="text"
          class="form-control new-movie-label"
          placeholder="Movie"
          v-model="name"
        />
        <input
          type="number"
          class="form-control new-movie-label"
          placeholder="Seen how many times?"
          v-model.number="viewers"
        />
        <PrimaryButton class="btn btn-outline-success" type="submit">Add</PrimaryButton>
      </form>
    </div>
  </template>
  
  <script>
  import { v4 as uuidv4 } from 'uuid'; 
  
  export default {
    data() {
      return {
        name: '',
        viewers: 0
      };
    },
    methods: {
      addMovie() {
        if (!this.name || !this.viewers) return;
        const newMovie = {
          id: uuidv4(), // Generate unique ID
          name: this.name,
          viewers: this.viewers,
          favourite: false,
          like: false,
        };
        this.$emit('createMovie', newMovie);
        this.name = '';
        this.viewers = 0;
      }
    },
  };
  </script>
  