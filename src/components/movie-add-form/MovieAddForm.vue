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
            type="text"
            class="form-control new-movie-label"
            placeholder="Seen how many times?"
            v-model="viewers"
        />
            <PrimaryButton class="btn btn-outline-success" type="submit">Add</PrimaryButton>
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
            addMovie() {
                if(!this.name || !this.viewers) return;
                const newMovie = {
                    name: this.name,
                    viewers: this.viewers,
                    favourite: false,
                    like: false,
                }  
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
    