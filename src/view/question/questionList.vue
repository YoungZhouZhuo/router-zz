<template>
  <div>
    <h2>问题列表</h2>
    <router-link :to="{ name: 'questionView', params: { id: '1' } }">
      用毒蛇的毒毒毒蛇毒蛇会被毒死吗？
    </router-link>
    <br />
    <router-link :to="{ name: 'questionView', params: { id: '2' } }">
      有一只随机出现在你方圆两公里的蜗牛暗杀你你会怎么办？
    </router-link>
  </div>
</template>

<script>
export default {
  name: "questionList"
};
</script>

<style scoped>
</style>