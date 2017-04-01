<template>
  <div id="app">
    <input type="button" name="" value="点击增加" @click='increment'>
    <input type="button" name="" value="点击减少" @click="decrement">
    <input type="button" name="" value="只有偶数才能点击+" @click="clickOdd">
    <input type="button" name="" value="异步增加" @click="clickAsync">

      <p>现在的数字是:{{count}},他是{{odd}}</p>
    <el-button type="primary" icon="search">搜索</el-button>
    <img src="./assets/logo.png">
    <router-link to='/news'>news</router-link>
    <router-link to='/sports'>sports</router-link>
    <div>
      <router-view></router-view>
    </div>
    <v-header></v-header>
    <router-view></router-view>
    <div class="">
      {{seller}}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Header from './components/header'
export default {
  name: 'app',
  components: {
    'v-header': Header
  },
  data () {
    return {
      goods: {},
      seller: {},
      rating: {}
    }
  },
  computed: mapGetters([
    'count',
    'odd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'clickOdd',
    'clickAsync'
  ]),
  created () {
  // GET /someUrl
    this.$http.get('api/goods').then(response => {
    // get body data
       this.goods = response.body
    }, response => {
    console.log('数据还未获取到')
    })
    this.$http.get('api/seller').then(response => {
    // get body data
       this.seller = response.body
    }, response => {
    console.log('数据还未获取到')
    })
    this.$http.get('api/goods').then(response => {
    // get body data
       this.goods = response.body
    }, response => {
    console.log('数据还未获取到')
    })
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
