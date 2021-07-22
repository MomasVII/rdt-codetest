<template>
  <div class="gameCardContainer">
    <div class="gameIcon">
      <div class="gameDescription">
        {{ game.date_added }}
        {{ game.summary }}
      </div>
      <img :src="game.logo.thumb_320x180" />
    </div>
    <div class="gameInfo">
      <h1>{{ game.name }}</h1>
      <div class="gameStats">
        <div class="stats">
          <div class="arrowDown"></div>
          <p>{{ game.stats.mods_subscribers_total }}</p>
          <div class="statDescriptionContainer">
            <div class="statDescription">Subscribers</div>
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
}
</script>

<style scoped>
.gameCardContainer {
  background-color:#171727;
  border-radius:4px;
  cursor:pointer;
}
.gameCardContainer:hover .gameInfo .gameStats .stats:first-of-type {
  display:flex;
}
.gameCardContainer:hover .gameDescription {
  opacity:1;
}
h1 {
  font-size:14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gameIcon {
  overflow:hidden;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.gameIcon img {
  width:100%;
}
.gameDescription {
  background-color:rgba(23, 23, 39, 0.97);
  position:absolute;
  width:calc(100% - 0.75rem);
  height:100%;
  overflow:auto;
  padding: 0.75rem;
  font-size:14px;
  line-height:20px;
  opacity:0;
  transition:0.4s ease all;
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
