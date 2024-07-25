<template>
    <div class="d-flex">
        <input type="text" class="form-control search-input" placeholder="Search Movies">
        <i class="fa fa-search search-icon"></i>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .search-input {
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding: 1.5rem;
        background: #fcfaf5;
        border-radius: 4px;
        box-shadow: 15px 15px 15px 15px rgba(0,0,0,0.15);
    }
    .search-icon{
        margin-left: -3.5rem;
        margin-top: 3.7rem;
        color: #a9a9a9;
        font-size: 1.5rem;

    }
</style>