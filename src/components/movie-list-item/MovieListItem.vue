<template>
  <li class="li-group-item d-flex justify-content-between">
    <span class="list-group-item-label">Mahmudov</span>
    <input type="number" class="list-group-item-input" defaultValue="711" />
    <div class="d-flex justify-content-center align-items-center">
      <button type="button" class="btn-cookie btn-sm">
        <i class="fa fa-heart"></i>
      </button>
      <button type="button" class="btn-cookie btn-sm">
        <i class="fas fa-trash"></i>
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

}
.list-group-item:last-child{
    border-bottom: none;
}
.list-group-item span{
    line-height: 35px;
    font-size: 20px;
    cursor: pointer;
    width: 550px;
}
.list-group-item input{
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: 0;
    outline: none;
}
.list-group-item button{
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;
    background: red;
}

</style>