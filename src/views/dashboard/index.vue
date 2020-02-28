<template>
  <div class="dashboard-container">
    <div>
      正在搞的内容
    </div>
    <el-row>
      <el-col :span="3">
        武器
      </el-col>
      <el-col :span="3">
        <el-progress :percentage="10"></el-progress>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        怪物
      </el-col>
      <el-col :span="3">
        <el-progress :percentage="5"></el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
