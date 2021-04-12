<template>
  <div class="wrap">
    <div id="nav" >
      <span v-for="item in NAVS" :key="item.id">
        <router-link :to="item.path">{{ item.text }} </router-link>
       </span>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import { NAVS } from './utils/routerLink.config'
export default{
  setup(props) {
    return {
      NAVS
    }
  } 
}
</script>
<style lang="scss">
html, body,#app,.wrap {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.wrap {
  display: flex;
  #nav {
    padding: 30px;
    background: #282C34;
    a {
      display: block;
      font-weight: bold;
      color: #eeee;
      width: 140px;
      padding: 20px 0;
      text-align: center;
      text-decoration: none;
      font-size: 18px;

      &.router-link-exact-active {
        color: #42b983;
        text-align: center;
      }
    }
  }
  .content{
    padding: 80px;
    background: #fff;
    flex: 1;
  }
}
</style>
