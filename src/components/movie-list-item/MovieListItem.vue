<template>
  <li class="li-group-item d-flex justify-content-between">
    <span class="list-group-item-label"><i class="fas fa-user user"></i>Mahmudov</span>
    <input type="number" class="list-group-item-input" defaultValue="711" />
    <div class="d-flex justify-content-center align-items-center">
      <button type="button" class="btn-cookie btn-sm">
        <i class="fa fa-heart heart"></i>
      </button>
      <button type="button" class="btn-cookie btn-sm">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
      <i class="fas fa-star"></i>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
.li-group-item {
    padding: 15px 20px;
    border-bottom: 1px solid #3d5a80;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.list-group-item:last-child {
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
    font-size: 20px;
    text-align: center;
    border: 2px solid #3d5a80;
    border-radius: 5px;
    padding: 5px 10px;
    width: 100px;
    margin: 0 10px;
    background-color: #fff;
    color: #333;
}
.list-group-item-input:focus {
    border-color: #2a4d69;
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
  .user{
    color: rgb(20, 20, 71);
    margin-right: 10px;
  }
</style>
