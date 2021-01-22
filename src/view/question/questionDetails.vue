<template>
  <div>
    <h2>问题详情</h2>
    问题{{ id }}:
    <b v-if="id == 1"> 会被毒死 </b>
    <b v-if="id == 2"> 不知道 </b>
  </div>
</template>

<script>
export default {
  name: "questionDetails",
  props: ["id"]
};
</script>

<style scoped>
</style>
