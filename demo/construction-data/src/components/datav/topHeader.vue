<template>
  <div id="top-header">
    <div style="position: absolute;width:60px;height:40px;top:28px;left:1%;font-size: 22px"><a href="http://101.132.169.245/#/dashboard" style="text-decoration:none; color:#409EFF">后台</a></div>
    <el-button type="text" style="position: absolute;width:60px;height:40px;top:20px;left:3.5%;font-size: 22px" @click="goBackBim">BIM</el-button>
    <div style="position: absolute;width:70px;height:40px;top:28px;left:7%;font-size: 22px"><a href="http://wellsgroup.3322.org:3980/#/buildHome/index/" style="text-decoration:none; color:#409EFF">睿能云</a></div>
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">xxxx中心智慧运营平台</div>
    <div style="position: absolute;width:400px;height:40px;top:30px;left:85%;font-size: 22px;font-weight: 600; color:#409EFF"><i class="el-icon-time"/> {{ showTime }}</div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'TopHeader',
  data () {
    return {
      showTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted () {
    setInterval(() => {
      this.showTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
    }, 1000)
  },
  methods: {
    goBackBim () {
      this.$router.push('./bim')
    }
  }
}
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration, .header-right-decoration {
    width: 25%;
    height: 60px;
  }

  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
}
</style>
