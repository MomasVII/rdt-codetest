<template>
  <div class="appMenuContainer">
    X
  </div>
</template>


<script>
</script>


<style scoped>
.appMenuContainer {
  width: 240px;
  top: 0;
  bottom: 0;
  left:60px;
  overflow: hidden;
  position: fixed;
  background-color:#171727;
  z-index:10;
}

@media screen and (max-width: 768px) {
  .appMenuContainer {
      display: none;
  }
}
</style>
