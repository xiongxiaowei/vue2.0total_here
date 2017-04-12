<template lang="html">
  <div>
    <div v-for="(val,index) in artical">
      <h1>{{val.title}}</h1>
      <img :src="val.author_face" alt="" width="30" height="30">
      <p v-html=val.content></p>
    </div>

 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      artical: []
    }
  },
  mounted() {
    this.fitchData()
    this.fitchData1()
  },
  methods: {
    fitchData() {
      // console.log(this.$http.get)

      this.$http.get('static/data/index.data').then(function(res) {
        console.log(res.data[0].content)
        this.artical = res.data
      }.bind(this)).catch(function(error) {
        console.log('home', error)
      })
    }
  }
}
</script>

<style>
p{
  text-indent: 2em;
  color: blue;
  font-family: "微软雅黑";
  text-align:left;
}
</style>
