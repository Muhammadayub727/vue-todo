<template>
    <ul class="movie-list list-group">
        <MovieListItem v-for="movie in movies" :key="movie.id" v-bind:movie="movie"/>    
    </ul>
</template>

<script>
import MovieListItem from '../movie-list-item/MovieListItem.vue'
export default {
    components: {
        MovieListItem,
    },
    data() {
        return {
            movies: [
                {
                    id: 1,
                    name: 'Movie 1',
                    rating: 5,
                    viewers: 701,
                    favourite: true,
                    like: true
                },
                {
                    id: 2,
                    name: 'Movie 2',
                    rating: 4,
                    viewers: 711,
                    favourite: false,
                    like: false,
                },
                {
                    id: 3,
                    name: 'Movie 3',
                    rating: 3,
                    viewers: 722,
                    favourite: false,
                    like: true
                },
                
            ]
        }
    }
}
</script>

<style scoped>
    .movie-list {
        margin-top: 2rem;
        /* margin-bottom: 1rem; */
        padding: 1.5rem;
        background: #fcfaf5;
        border-radius: 4px;
        box-shadow: 15px 15px 15px 15px rgba(0,0,0,0.15);
    }
</style>