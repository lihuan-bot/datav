<template>
  <div class="top-right-cmp">
    <div class="chart-name">
      车辆态势
      <!-- <dv-decoration-3 style="width:200px;height:20px;" /> -->
    </div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'TopRightCmp',
  data () {
    return {
      option: {
        // legend: {
        //   data: [
        //     {
        //       name: '收费系统',
        //       color: '#00baff'
        //     },
        //     {
        //       name: '监控系统',
        //       color: '#ff5ca9'
        //     },
        //     {
        //       name: '通信系统',
        //       color: '#3de7c9'
        //     },
        //     {
        //       name: '供配电系统',
        //       color: '#f5d94e'
        //     }
        //   ],
        //   textStyle: {
        //     fill: '#fff'
        //   }
        // },
        xAxis: {
          data: [],
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#fff',
              rotate: -40,
              fontSize: 12
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: value => value
        },
        series: [
          {
            name: '停车系统',
            data: [
            ],
            label: {
              show: true,
              position: 'center',
              offset: [0, 0],
              style: {
                fill: '#fff',
                fontSize: '24px'
              }
            },
            type: 'bar',
            barStyle: {
              fill: 'rgba(255, 186, 255, 0.4)'
            },
            barWidth: '30'
          }
          // {
          //   name: '监控系统',
          //   data: [
          //     2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5
          //   ],
          //   type: 'line',
          //   lineStyle: {
          //     stroke: '#ff5ca9'
          //   },
          //   linePoint: {
          //     radius: 4,
          //     style: {
          //       fill: '#ff5ca9',
          //       stroke: 'transparent'
          //     }
          //   }
          // },
          // {
          //   name: '通信系统',
          //   data: [
          //     1.3, 2.3, 5.3, 5.3, 6.3, 5.3, 1.3
          //   ],
          //   type: 'line',
          //   smooth: true,
          //   lineArea: {
          //     show: true,
          //     gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
          //   },
          //   lineStyle: {
          //     lineDash: [5, 5]
          //   },
          //   linePoint: {
          //     radius: 4,
          //     style: {
          //       fill: '#00db95'
          //     }
          //   }
          // },
          // {
          //   data: [
          //     0.2, 1.2, 4.2, 4.2, 5.2, 4.2, 0.2
          //   ],
          //   type: 'line',
          //   name: '供配电系统',
          //   lineArea: {
          //     show: true,
          //     gradient: ['rgba(245, 217, 79, 0.8)', 'rgba(245, 217, 79, 0.2)']
          //   },
          //   lineStyle: {
          //     stroke: '#f5d94e'
          //   },
          //   linePoint: {
          //     radius: 4,
          //     style: {
          //       fill: '#f5d94e',
          //       stroke: 'transparent'
          //     }
          //   }
          // }
        ]
      },
      time: []
    }
  },
  mounted () {
    this.getData()
    setInterval(() => {
      this.getData()
    }, 1000 * 30)
  },
  methods: {
    getData () {
      this.option.xAxis.data.push(dayjs().format('HH:mm:ss'))
      let data = Number((Math.random() * 10 + 230).toFixed(0))
      this.option.series[0].data.push(data)
      if (this.option.xAxis.data.length === 6) {
        this.option.xAxis.data.splice(0, 1)
        this.option.series[0].data.splice(0, 1)
      }
      this.option = { ...this.option }
    }
  }
}
</script>

<style lang="less">
.top-right-cmp {
  position: relative;
  height: 34%;
  padding: 0 50px;
  box-sizing: border-box;
  background-color: rgba(6, 30, 93, 0.5);
  .chart-name {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translate(-50%);
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 22px;
    justify-content: center;
    // position: absolute;
    // right: 70px;
    // text-align: right;
    // font-size: 20px;
    // top: 10px;
  }
}
</style>
