<template>
  <div>
    <table id="app">
      <tr>
        <td>姓名</td>
        <td>周卓</td>
      </tr>
      <tr>
        <td>性别</td>
        <td>男</td>
      </tr>
      <tr>
        <td>民族</td>
        <td>汉族</td>
      </tr>
      <tr>
        <td>爱好</td>
        <td>不晓得</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "personal",
};
</script>
<style scoped>
#app {
  margin: 0 auto;
  border: solid 1px black;
}
#app tr td {
  text-align: center;
  border: solid 1px black;
}
</style>
