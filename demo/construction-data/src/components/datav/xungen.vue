<template>
  <div class="center-cmp">
    <div class="cc-header">
      <!-- <dv-decoration-1 style="width:200px;height:50px;" /> -->
      <div>安防态势</div>
      <!-- <dv-decoration-1 style="width:200px;height:50px;" /> -->
    </div>

    <div class="cc-details">
      <div>任务总数</div>
      <div class="card">{{ num4 || 0 }}</div>
      <div class="card">{{ num3 || 0 }}</div>
      <div class="card">{{ num2 || 0 }}</div>
      <div class="card">{{ num1 || 0 }}</div>
    </div>

    <div class="cc-main-container">
      <div class="ccmc-left">
        <div class="station-info">
          <div class="title-item">总完成数</div><span>{{ data.finishNum }}</span>
        </div>
        <div class="station-info">
          <div class="title-item">巡更中</div><span>{{ data.unFinishNum }}</span>
        </div>
      </div>

      <dv-active-ring-chart class="ccmc-middle" :config="config" />

      <div class="ccmc-right">
        <div class="station-info">
          <span>{{ data.signInRate }}</span><div class="title-item">签到率</div>
        </div>
        <!-- <div class="station-info">
          <span>317</span><div class="title-item">其他</div>
        </div> -->
      </div>

      <LabelTag :config="labelConfig" />
    </div>
  </div>
</template>

<script>
import LabelTag from './LabelTag'
import dayjs from 'dayjs'
import { getPatrolSummaryDimensionByDay } from '../../network/data'
export default {
  name: 'CenterCmp',
  components: {
    LabelTag
  },
  data () {
    return {
      config: {
        data: [
          {
            name: '完成率',
            value: ''
          },
          {
            name: '未完成率',
            value: 415
          }
          // {
          //   name: '道路外场',
          //   value: 90
          // },
          // {
          //   name: '其他',
          //   value: 317
          // }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        lineWidth: 20,
        radius: '60%',
        activeRadius: '70%'
      },
      labelConfig: {
        data: ['完成率', '未完成率']
      },
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      data: {}
    }
  },
  mounted () {
    this._getPatrolSummaryDimensionByDay()
    setInterval(() => {
      this._getPatrolSummaryDimensionByDay()
    }, 1000 * 60 * 2)
  },
  methods: {
    _getPatrolSummaryDimensionByDay () {
      getPatrolSummaryDimensionByDay({ dateTime: dayjs().format('YYYY-MM-DD HH:mm:ss') }).then(res => {
        const { config } = this
        console.log(res)
        this.data = res.data.data
        config.data = [{ name: '完成率', value: 20 }, { name: '未完成率', value: 10 }]
        this.config = { ...this.config }
        // const arr = [this.num1, this.num2, this.num3, this.num4]
        // arr.map((item, index) => {
        //   let data = this.data.totalNum
        //   item = data.slice(index, index + 1)
        //   console.log(this.num1)
        // })
        let total = this.data.totalNum
        this.num1 = total.slice(0, 1)
        this.num2 = total.slice(1, 2)
        this.num3 = total.slice(2, 3)
        this.num4 = total.slice(3, 4)
      })
    }
  }
}
</script>

<style lang="less">
.center-cmp {
  width: 100%;
  height: 35%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  .cc-header {
    // height: 0px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // font-size: 24px;
    font-weight: bold;
    height: 0px;
    display: flex;
    align-items: center;
    font-size: 22px;
    justify-content: center;
    z-index: 1;
  }
  .cc-details {
    height: 120px;
    display: flex;
    justify-content: center;
    font-size: 22px;
    align-items: center;
    .card {
      background-color: rgba(4,49,128,.6);
      color: #08e5ff;
      height: 50px;
      width: 50px;
      font-size: 35px;
      font-weight: bold;
      line-height: 50px;
      text-align: center;
      margin: 5px;
    }
  }
  .cc-main-container {
    position: relative;
    flex: 1;
    display: flex;
    .ccmc-middle {
      width: 60%;
      height: 90%;
      .active-ring-name {
        font-size: 16px !important;
      }
    }
    .ccmc-left, .ccmc-right {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 20px;
      .title-item {
        margin: 0 auto;
        width: 20px;
        line-height: 24px;
      }
      span {
        display: inline-block;
        width: 50px;
        font-size: 24px;
        font-weight: bold;
      }
      .station-info {
        height: 103px;
        display: flex;
        align-items: center;
      }
    }
    .ccmc-left {
      align-items: flex-end;
      span {
        margin-left: 20px;
      }
    }
    .ccmc-right {
      align-items: flex-start;
      span {
        margin-right: 20px;
      }
    }
  }
  .label-tag {
    position: absolute;
    width: 500px;
    height: 30px;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
