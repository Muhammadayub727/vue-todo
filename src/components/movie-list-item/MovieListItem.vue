<template>
  <li
    class="li-group-item d-flex justify-content-between"
    :class="[{ like: movie.like }, { favourite: movie.favourite }]"
  >
    <span class="list-group-item-label"><i class="fas fa-user user"></i>{{ movie.name }}</span>
    <input type="number" class="list-group-item-input" :value="movie.viewers" />
    <div class="d-flex justify-content-center align-items-center">
      <button type="button" class="btn-cookie btn-sm" @click="$emit('onFavourite',movie.id)">
        <i class="fas fa-cookie heart" aria-hidden="true"></i>
      </button>
      <button type="button" class="btn-cookie btn-sm">
        <i class="fa fa-trash trash" aria-hidden="true"></i>
      </button>
      <i class="fa fa-heart star"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      reqiured: true,
    },
  },
  methods: {
    onLike () {
      this.$emit('onLike', this.movie.id)
      // console.log(this.movie.id) 
    }
  },
};
</script>

<style scoped>
.li-group-item {
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.li-group-item:last-child {
  border-bottom: none;
}
.list-group-item-label {
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  width: 550px;
  color: #333;
}
.list-group-item-input {
  line-height: 35px;
  background: none;
  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100px;
  margin: 0 10px;
  color: #333;
}
.list-group-item-input:focus {
  border-color: none;
  outline: none;
}
.btn-cookie {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, transform 0.2s;
}
.btn-cookie:hover {
  background: #e2e6ea;
  transform: scale(1.1);
}
.btn-cookie:active {
  background: #d6d6d6;
}
.heart {
  color: #587293;
}
.user {
  color: rgb(20, 20, 71);
  margin-right: 10px;
}
.trash {
  color: #587293;
}

.star {
  width: 35px;
  height: 35px;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  color: red;
  transition: color 0.3s ease;
  transform: translateX(30px);
  opacity: 0;
}

.li-group-item.like .star {
  opacity: 1;
  transform: translateX(0);
}

.li-group-item.favourite .list-group-item-label {
  color: #e09f3a;
}
.li-group-item.favourite .list-group-item-input {
  color: #e09f3a;
}
.li-group-item.favourite .user {
  color: #e09f3a;
}
</style>
