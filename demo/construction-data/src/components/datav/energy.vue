<template>
  <div class="left-chart-1">
    <div class="lc1-header">环境态势</div>
    <div class="lc1-details">现在温度<span>{{ temputer }} ℃</span></div>
    <dv-capsule-chart class="lc1-chart" :config="config" />
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LeftChart1',
  data () {
    return {
      config: {
        data: [
          {
            name: '最高温度',
            value: 167
          },
          {
            name: 'AHU',
            value: 67
          },
          {
            name: '排风',
            value: 123
          },
          {
            name: '电力',
            value: 55
          },
          {
            name: '其他',
            value: 98
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: 'KW'
      },
      temputer: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      axios.get('/weather').then(res => {
        let data = res.data.data
        this.temputer = data.wendu
        this.config.data = [ { name: '湿度', value: data.wendu }, { name: '温度', value: 100 } ]
        this.config = { ...this.config }
        console.log(data)
      })
    })
  }
}
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 35%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  .lc1-header {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 22px;
    justify-content: center;
    // text-align: center;
    // height: 40px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // font-size: 30px;
    // margin-bottom: 20px;
  }
  .lc1-details {
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    span {
      color: #fff;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }
  .lc1-chart {
    flex: 1;
  }
}
</style>
