<template>
  <div id="data-view">
    <dv-full-screen-container>

      <top-header />

      <div class="main-content">
        <dv-border-box-8 class="left-content">
          <cards />
          <waterLevelChart />
          <carBar />
        </dv-border-box-8>
        <div class="middle-content">
          <iframe class="mainFrame" src="http://www.thingjs.com/pp/c827821de82369bfc334b183" frameborder="0" allowtransparency="true" />
          </div>
        <dv-border-box-1 class="right-content">
          <energyLine />
          <xungen />
          <!-- <roseChart /> -->
          <scrollBoard />
        </dv-border-box-1>
        <!-- <digital-flop />

        <div class="block-left-right-content">
          <ranking-board />

          <div class="block-top-bottom-content">
            <div class="block-top-content">
              <rose-chart />

              <water-level-chart />

              <scroll-board />
            </div>

            <cards />
          </div>
        </div> -->
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from './topHeader'
// import digitalFlop from './digitalFlop'
// import rankingBoard from './rankingBoard'
// import roseChart from './roseChart'
import waterLevelChart from './waterLevelChart'
import scrollBoard from './scrollBoard'
import cards from './cards'
// import circlePie from './circlePie'
import carBar from './carBar'
// import energy from './energy'
import energyLine from './energyLine'
import xungen from './xungen'

export default {
  name: 'DataView',
  components: {
    topHeader,
    // digitalFlop,
    // rankingBoard,
    // roseChart,
    waterLevelChart,
    scrollBoard,
    cards,
    // circlePie,
    carBar,
    // energy,
    energyLine,
    xungen

  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    display: flex;
    // flex-direction: column;
    .left-content {
      width: 22%;
      padding: 10px;
      box-sizing: border-box;
      background-color: rgba(6, 30, 93, 0.5);
      .border-box-content {
      flex-direction: column;
    }
  }
  .middle-content {
      flex: 1;
      display: flex;
      flex-basis: 40%;
      // margin-top: 20px;
      background-color: rgba(6, 30, 93, 0.5);
      .mainFrame{
        width: 100%;
        height: 100%;
  }
  }
  .right-content {
      width: 22%;
      padding: 10px;
      box-sizing: border-box;
      background-color: rgba(6, 30, 93, 0.5);
      .border-box-content {
      flex-direction: column;
    }
      // flex: 1;
      // display: flex;
      // flex-basis: 10%;
      // // margin-top: 20px;
      // background-color: rgba(6, 30, 93, 0.5);
  }
  }
  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>
