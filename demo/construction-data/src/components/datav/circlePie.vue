<template>
  <div class="left-chart-2">
    <div class="lc2-header">环境态势</div>
    <!-- <div class="lc2-details">设备运行总数<span>245</span></div> -->
    <dv-charts class="lc2-chart" :option="option" />
    <!-- <dv-active-ring-chart class="lc2-chart" :config="config" /> -->
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
import axios from 'axios'
import { getPeopleData } from '../../network/data'
export default {
  name: 'CirclePie',
  data () {
    return {
      config: {
        radius: '80%',
        activeRadius: '90%',
        data: [
          {
            name: '绿化率',
            value: 55
          },
          {
            name: '生活污水',
            value: 120
          },
          {
            name: '节约用水',
            value: 78
          },
          {
            name: '再利用率',
            value: 66
          },
          {
            name: '其他',
            value: 80
          }
        ],
        digitalFlopStyle: {
          fontSize: 20
        }
      },
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '绿化率', value: 93 },
              { name: '生活污水', value: 32 },
              { name: '节约用水', value: 65 },
              { name: '再利用率', value: 44 },
              { name: '其他', value: 52 }
            ],
            radius: ['45%', '65%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{percent}%\n{name}',
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
      }
    }
  },
  mounted () {
    axios.get('/weather').then(res => {
      console.log(res.data)
    })
    getPeopleData().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less">
.left-chart-2 {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  .lc2-header {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 22px;
    justify-content: center;
  }
  // .lc2-header {
  //   height: 20px;
  //   line-height: 20px;
  //   font-size: 16px;
  //   text-indent: 20px;
  //   margin-top: 10px;
  // }
  .lc2-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }
  .lc2-chart {
    height: calc(~"100% - 80px");
  }
}
</style>
