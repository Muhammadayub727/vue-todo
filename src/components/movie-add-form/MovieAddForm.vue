<template>
<div class="movie-add-form">
    <h1>Add Movie</h1>
    <form class="add-form d-flex" @submit.prevent>
    <input
        type="text"
        class="form-control new-movie-label"
        placeholder="Movie"
        :value="name"
        @input="name = $event.target.value"
    />
    <input
        type="text"
        class="form-control new-movie-label"
        placeholder="Seen how many times?"
        :value="viewers"
        @input="viewers = $event.target.value"
    />
        <button class="btn btn-outline-success" type="submit" @click="addMovie">Add</button>
    </form>
</div>
</template>

<script>
export default {
    data(){
        return {
            name: '',
            viewers: ''
        }
    },
    methods: {
        addMovie(e) {
            // e.preventDefault()
            const newMovie = {
                name: this.name,
                viewers: this.viewers,
                favoutite: false,
                like: false
            }
            // console.log(newMovie)    
            this.$emit('add-movie', newMovie)
            this.name = ''
            this.viewers = ''
        },
    },
};
</script>

<style scoped>
.movie-add-form {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>