<template>
  <div class="gameCardContainer">
    <h1>{{ game.name }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Game Card',
  props: [
      'game',
  ],
  data() {
    return {
      gameData: null, //Game response data
    }
  },
  mounted () {
    //Get Game info from API
  }
}

</script>

<style scoped>
.gameCardContainer {
  width:15%;
  border:1px solid red;
}
</style>
