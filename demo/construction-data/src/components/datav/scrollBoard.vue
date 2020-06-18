<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
import { getEvents } from '../../network/data'
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['时间', '状态'],
        data: [
          // ['2019-07-01 ', '路面危害-松散', '5'],
          // ['2019-07-02 ', '路面危害-路面油污清理', '13'],
          // ['2019-07-03 ', '交安设施-交通标志牌结构', '6'],
          // ['2019-07-04 ', '路基危害-防尘网', '2'],
          // ['2019-07-05 ', '交安设施-交通标志牌结构', '1'],
          // ['2019-07-06 ', '路面危害-松散', '3'],
          // ['2019-07-07 ', '路基危害-防尘网', '4'],
          // ['2019-07-08 ', '路面危害-路面油污清理', '2'],
          // ['2019-07-09 ', '交安设施-交通标志牌结构', '5'],
          // ['2019-07-10 ', '路基危害-防尘网', '3']
        ],
        index: true,
        columnWidth: [50, 180, 250],
        align: ['left'],
        rowNum: 6,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      },
      dataList: []
    }
  },
  mounted () {
    this._getEvent()
    setInterval(() => {
      this._getEvent()
    }, 1000 * 60)
  },
  methods: {
    _getEvent () {
      getEvents().then(res => {
        this.dataList = res.data.map(item => [item.time, item.event])
        this.dataList = this.dataList.slice(this.dataList.length - 50, this.dataList.length)
        this.config.data = [...this.dataList]
        this.config = { ...this.config }
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
#scroll-board {
  width: 100%;
  height: 33%;
  box-sizing: border-box;
  margin-right: 20px;
  // height: 100%;
  overflow: hidden;
}
</style>
