<template>
  <div class="container">
    <el-button type="success" style="position:absolute; z-index:9" @click="goBackDatav">回到大屏</el-button>
    <iframe id="mainFrame" name="mainFrame" class="mainFrame" src="http://101.132.169.245/bim/ForgeViewerA.html?FLURN=3F-VIEW/3d.svf" frameborder="0" allowtransparency="true" />
  </div>
</template>

<script>
export default {
  name: 'LightBIM',
  data () {
    return {
    }
  },
  created () {
    window['handleBim'] = () => {
      this.handleDialog()
    }
  },
  methods: {
    goBackDatav () {
      this.$router.push('/datav')
    }
  }
}
</script>

<style scoped>
.container{
    background-color: #e3e3e3;
    height: calc(100vh);
    padding: 0.5rem;
  }
  .mainFrame{
    width: 100%;
    height: 100%;
  }
</style>
