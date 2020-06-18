<template>
  <div class="top-right-cmp">
    <div class="chart-name">
      能耗态势
      <!-- <dv-decoration-3 style="width:200px;height:20px;" /> -->
    </div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
import { getSelectElectricalHistory } from '../../network/data'
export default {
  name: 'TopRightCmp',
  data () {
    return {
      option: {
        legend: {
          data: [
            // {
            //   name: '收费系统',
            //   color: '#00baff'
            // },
            {
              name: '8:00-20:00',
              color: '#ff5ca9'
            },
            {
              name: '20:00-8:00',
              color: '#3de7c9'
            }
            // {
            //   name: '供配电系统',
            //   color: '#f5d94e'
            // }
          ],
          textStyle: {
            fill: '#fff'
          },
          top: '22%',
          left: '25%'
        },
        xAxis: {
          data: ['06-10', '06-11', '06-12', '06-13'],
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
          max: '30%'
        },
        series: [
          {
            name: '8:00-20:00',
            data: [
              2.5, 15, 6
            ],
            type: 'line',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            lineStyle: {
              stroke: '#ff5ca9'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#ff5ca9',
                stroke: 'transparent'
              }
            }
          },
          {
            name: '20:00-8:00',
            data: [
              3, 2.3, 2
            ],
            type: 'line',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            lineStyle: {
              lineDash: [5, 5]
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          }
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
      time: '',
      morningData: [],
      morningDate: [],
      nightData: [],
      nightDate: []
    }
  },
  // watch: {
  //   time () {
  //     this.option.xAxis.data = ['Sun.', 'Thu.', 'Fri.', 'Sat.', 'Mon.', 'Tue.', 'Wed.']
  //   }
  // },
  mounted () {
    this._getSelectElectricalHistory()
    setInterval(() => {
      this._getSelectElectricalHistory()
      // this.option.xAxis.data = [...this.morningDate]
      // this.option = { ...this.option }
    }, 1000 * 60 * 30)
  },
  methods: {
    _getSelectElectricalHistory () {
      getSelectElectricalHistory('abcd', 'count').then(res => {
        console.log(res.data, 888)
        res.data['morningData'].forEach(item => {
          this.morningData.push(item.value)
          this.morningDate.push(item.date)
          // this.option.xAxis.data = ['2020-06-14', '2020-06-15', ...this.morningDate]
          // this.option.series[0].data = [2000, 2500, ...this.morningData]
          // if (this.option.xAxis.data.length === 6) {
          //   this.option.xAxis.data.splice(0, 1)
          //   this.option.series[0].data.splice(0, 1)
          // }
          // this.option = { ...this.option }
        })
        res.data['nightData'].forEach(item => {
          this.nightData.push(item.value)
          this.nightDate.push(item.date)
        })
        this.option.xAxis.data = ['2020-06-14', '2020-06-15', ...this.morningDate]
        this.option.series[0].data = [2000, 2500, ...this.morningData]
        this.option.series[1].data = [600, 1400, ...this.nightData]
        if (this.option.xAxis.data.length === 6) {
          this.option.xAxis.data.splice(0, 1)
          this.option.series[0].data.splice(0, 1)
          // this.option.series[1].data.splice(0, 1)
        }
        this.option = { ...this.option }
      })
    }
  }
}
</script>

<style lang="less">
.top-right-cmp {
  position: relative;
  height: 32%;
  padding: 0 50px;
  box-sizing: border-box;
  background-color: rgba(6, 30, 93, 0.5);
  .chart-name {
    position: absolute;
    top: 0px;
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
