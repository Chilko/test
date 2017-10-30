<template>
  <div id="app">
    <div class="header_inner ui-bottom-line">
      <div class="header_info ui-flex-justify-center">
        <div class="header_left">
          <router-link to="/page"><img src="./assets/images/logo.png" alt=""></router-link>
        </div>
        <div class="header_right">
          <router-link to="/movie">电影</router-link>
          <router-link to="/book">图书</router-link>
          <router-link to="/list">广播</router-link>
          <router-link to="/group">小组</router-link>
          <router-link to="/search"></router-link>
        </div>
      </div>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    }
  }
</script>

<style lang="less" rel=stylesheet/less>
  #app {
    position: absolute;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    .header_inner {
      padding: 0.2rem 0.3rem;
      max-width: 576px;
      width: 100%;
      margin: 0 auto;
      background: #fff;
      .header_info {
        height: 0.44rem;
        .header_left {
          background: url('./assets/images/logo.png') no-repeat;
          background-size: cover;
          height: 22px;
          width: 46px;
          a {
            display: block;
            width: 100%;
            height: 100%;
            font-size: 0;
          }
        }
        .header_right a {
          margin-left: 0.25rem;
          font-size: 14px;
          color: #2384E8;
        }
        .header_right a:nth-child(2) {
          color: #9F7860;
        }
        .header_right a:nth-child(3) {
          color: #E4A813;
        }
        .header_right a:nth-child(4) {
          color: #9F7860;
        }
        .header_right a:nth-child(5) {
          display: inline-block;
          width: 24px;
          height: 18px;
          background: url('./assets/images/search.png') no-repeat;
          background-size: cover;
          vertical-align: middle;
          margin-top: 3px;
        }
      }
    }
    .view {
      position: absolute;
      width: 100%;
      top: 0.84rem;
      bottom: 0;
      overflow: hidden;
    }
  }
</style>
