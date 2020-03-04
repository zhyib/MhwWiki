<template>
  <div class="dashboard-container">
    <h1>进度一览</h1>
    <el-card class="box-card">
      <div slot="header" class="cardTitle">
        <span>样式</span>
      </div>
      <div v-for="(item, index) in styleCard" :key="index">
        <el-row class="cardRow">
          <el-col :span="leftSpan">
            {{ item.name }}
          </el-col>
          <el-col :span="rightSpan">
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
          <el-col :span="leftSpan">
            {{ item.name }}
          </el-col>
          <el-col :span="rightSpan">
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
          <el-col :span="leftSpan">
            {{ item.name }}
          </el-col>
          <el-col :span="rightSpan">
            <el-progress :percentage="item.progress" :status="item.status" />
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SvgIcon from '@/components/SvgIcon/index'

export default {
  name: 'Dashboard',
  components: {
    'svg-icon': SvgIcon
  },
  data() {
    return {
      activeName: 'first',
      leftSpan: 8,
      rightSpan: 16,
      styleCard: [{
        name: '武器',
        progress: 90
      }, {
        name: '怪物',
        progress: 70
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
        progress: 60
      }, {
        name: '删除登录功能',
        progress: 100,
        status: 'success'
      }, {
        name: '小图标转换Svg',
        progress: 100,
        status: 'success'
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
    width: 520px;
  }

  .cardTitle {
    font-weight: bold;
    color: #5a5e66;
  }

  .cardRow {
    margin-bottom: 8px;
  }
</style>
