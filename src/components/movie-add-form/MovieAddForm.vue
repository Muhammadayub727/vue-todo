<template>
    <div class="movie-add-form">
        <h1>Add Movie</h1>
        <form class="add-form d-flex">
            <input type="text" class="form-control new-movie-label" placeholder="Movie">
            <input type="text" class="form-control new-movie-label" placeholder="Seen how many times?">
            <button class="btn btn-outline-success" type="submit">Add</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .movie-add-form {
        margin-top: 2rem;
        padding: 1.5rem;
        background: #fcFaf5;
        border-radius: 4px;
        box-shadow: 15px 15px 15px 15px rgba(0,0,0,0.15); 
    }   
</style>