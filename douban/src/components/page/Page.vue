<template>
  <transition name="expand">
    <div class="page" ref="exp">
      <div>
        <nav>
          <ul class="clearfix">
            <li><a>影院热映</a></li>
            <li><a>跳蚤市场</a></li>
            <li><a>美好的事情</a></li>
            <li><a>使用豆瓣App</a></li>
          </ul>
        </nav>
        <div class="section">
          <contoner :list="list"></contoner>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import contoner from './Contoner.vue'
  import IScroll from 'iscroll'
  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.$axios.get('/api/list')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            this.list = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$nextTick(() => {
        setTimeout(() => {
          this.expScroll = new IScroll(this.$refs.exp, {
            click: true
          })
        }, 10)
      })
    },
    components: {
      contoner
    }
  }
</script>
<style lang="less" rel=stylesheet/less scoped>
  .page {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
