<template>
  <transition name="expand">
    <div class="group" ref="grop">
      <ul>
        <li class="group_item" v-for="item in group">
          <h3>{{item.title}}</h3>
          <ul class="group_list">
            <li class="ui-bottom-line" v-for="list in item.arr">
              <a>
                <div class="ui-flex-align">
                  <div class="ui-flex-left group_list_l">
                    <img :src="list.url"/>
                  </div>
                  <div class="ui-flex-1 group_list_m">
                    {{list.name}}
                  </div>
                  <div class="group_list_r">{{list.num}}</div>
                </div>
                <p>{{list.des}}</p>
              </a>
            </li>
          </ul>
          <div class="group_more ui-bottom-line">更多相关小组</div>
        </li>
      </ul>
    </div>
  </transition>

</template>

<script>
  import IScroll from 'iscroll'
  export default {
    data() {
      return {
        group: []
      }
    },
    created() {
      this.$axios.get('/api/group')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            this.group = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$nextTick(() => {
        setTimeout(() => {
          this.gropScroll = new IScroll(this.$refs.grop, {
            click: true
          })
        }, 10)
      })
    }
  }
</script>

<style lang="less" rel=stylesheet/less scoped>
  .group {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .group_item {
    padding: 0.2rem 0.3rem;
    h3 {
      padding: 4px 0;
      font-size: 18px;
      color: #111;
    }
    .group_list {
      li {
        a {
          display: block;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 0.1rem 0 0.3rem;
          p {
            font-size: 14px;
            color: #aaa;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 8px 0 0;
          }
          div.group_list_l {
            width: 40px;
            height: 40px;
          }
          div.group_list_m {
            padding-left: 10px;
            padding-right: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 16px;
            color: #111;
          }
          div.group_list_r {
            color: #ccc;
            font-size: 14px;
          }
        }
      }
    }
  }

  .group_more {
    text-align: center;
    padding: 0.25rem 0;
    color: #42bd56;
    font-size: 15px;
  }
</style>
