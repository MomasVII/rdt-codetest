<template>
  <div class="gameCardContainer">
    <div class="gameIcon">
      <div class="gameDescription">
        {{ game.date_added | formatDate }}
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
  filters: {
    formatDate(value) {
      function ordinal(n) {
          let x = n % 100;
          let y = n % 10;
          let suffix = ['th', 'st', 'nd', 'rd'];
          if (x !== 11 && y === 1) {
              return `${n}${suffix[1]}`;
          } else if (x !== 12 && y === 2) {
              return `${n}${suffix[2]}`;
          } else if (x !== 13 && y === 3) {
              return `${n}${suffix[3]}`;
          } else {
              return `${n}${suffix[0]}`;
          }
      }

      if (value) {
          /* Convert UNIX timestamp to readable date */
          var a = new Date(value * 1000);
          var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          var year = a.getFullYear();
          var month = months[a.getMonth()];
          var date = a.getDate();

          var weekday = new Array(7);
          weekday[0] = 'Sun';
          weekday[1] = 'Mon';
          weekday[2] = 'Tue';
          weekday[3] = 'Wed';
          weekday[4] = 'Thu';
          weekday[5] = 'Fri';
          weekday[6] = 'Sat';

          var time = weekday[a.getDay()] + ' ' + ordinal(date) + ' ' + month + ', ' + year;
          return time;
      }
    }
  }
  
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
  height:85%;
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
