<template>
  <div class="gameCardContainer">
    <div class="gameIcon">
      <img :src="game.logo.thumb_320x180" />
    </div>
    <div class="gameInfo">
      <h1>{{ game.name }}</h1>
      <div class="gameStats">
        <div class="stats">
          <div class="arrowDown"></div>
          <p>{{ game.stats.mods_downloads_today }}</p>
          <div class="statDescriptionContainer">
            <div class="statDescription">Downloads Today</div>
          </div>
        </div>
        <div class="stats">
          <div class="arrowDown"></div>
          <p>{{ game.stats.mods_downloads_total }}</p>
          <div class="statDescriptionContainer">
            <div class="statDescription">Downloads</div>
          </div>
        </div>
      </div>
    </div>
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
  background-color:#171727;
  border-radius:4px;
  overflow:hidden;
  cursor:pointer;
}
.gameCardContainer:hover .gameInfo .gameStats .stats:first-of-type {
  display:flex;
}
h1 {
  font-size:14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gameIcon {
  overflow:hidden;
}
.gameIcon img {
  width:100%;
}
.gameInfo {
  padding:12px 16px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}

/*Stats*/
.gameStats {
  display:flex;
  align-items:center;
  opacity:0.75;
  transition:0.4s ease opacity;
  cursor:pointer;
}
.gameStats:hover {
  opacity:1;
}
.stats {
  display:flex;
  align-items:center;
  margin-left:7px;
  position:relative;
}
.stats:first-of-type {
  display:none;
}
.stats:hover .statDescriptionContainer {
  display:block;
}
.statDescriptionContainer {
  display:none;
  position:absolute;
  top:35px;
  left:-15px;
}

.statDescription {
  position:fixed;
  background-color:#171727;
  padding:5px;
  border-radius:3px;
  font-size:14px;
}
/*--*/

.arrowDown {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
  margin-right:4px;
}
p {
  font-size:12px;
  color:whitesmoke;
  margin:0;
}


</style>
