<template>
  <div class="dashboard-container">
    <h1>进度一览</h1>
    <el-card class="box-card">
      <div slot="header" class="cardTitle">
        <span>样式</span>
      </div>
      <div v-for="(item, index) in styleCard" :key="index">
        <el-row class="cardRow">
          <el-col :span="6">
            {{ item.name }}
          </el-col>
          <el-col :span="18">
            <el-progress :percentage="item.progress" />
          </el-col>
        </el-row>
      </div>
    </el-card>
    <br>
    <el-card class="box-card">
      <div slot="header" class="cardTitle">
        <span>数据</span>
      </div>
      <div v-for="(item, index) in dataCard" :key="index">
        <el-row class="cardRow">
          <el-col :span="6">
            {{ item.name }}
          </el-col>
          <el-col :span="18">
            <el-progress :percentage="item.progress" />
          </el-col>
        </el-row>
      </div>
    </el-card>
    <br>
    <el-card class="box-card">
      <div slot="header" class="cardTitle">
        <span>其它</span>
      </div>
      <div v-for="(item, index) in totalCard" :key="index">
        <el-row class="cardRow">
          <el-col :span="6">
            {{ item.name }}
          </el-col>
          <el-col :span="18">
            <el-progress :percentage="item.progress" :status="item.status" />
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      activeName: 'first',
      styleCard: [{
        name: '武器',
        progress: 80
      }, {
        name: '怪物',
        progress: 50
      }],
      dataCard: [{
        name: '武器',
        progress: 5
      }, {
        name: '怪物',
        progress: 3
      }],
      totalCard: [{
        name: '路由调整',
        progress: 10
      }, {
        name: '删除多余功能',
        progress: 0
      }]
    }
  },
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

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }

  .cardTitle {
    font-weight: bold;
    color: #5a5e66;
  }

  .cardRow {
    margin-bottom: 5px;
  }
</style>
