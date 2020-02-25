<template>
  <el-row>
    <el-col :span="12">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="牙龙种" name="牙龙种" style="text-align: center">
          <el-table
            ref="table"
            :data="tableData"
            :height="table"
            :style="tableHeight"
          >
            <el-table-column
              prop="icon"
            />
            <el-table-column
              prop="name"
              label="名称"
            />
            <el-table-column
              prop="address"
              label="地址"
            />
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-col>
    <el-col :span="12">
      <div></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Monster',
  data() {
    return {
      activeNames: ['牙龙种'],
      tableHeight: { height: '', }, // 表格高度
      table: window.innerHeight - 180, // 固定表头高度
      tableData: [{
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }, {
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14]
      }]
    }
  },
  methods: {
    getHeight() {
      this.tableHeight.height = window.innerHeight - 68 + 'px';  //获取浏览器高度减去顶部导航栏
    },
    created() {
      window.addEventListener('resize', this.getHeight);
      this.getHeight()
    },
    destroyed() {
      window.removeEventListener('resize', this.getHeight);
    }
  }
}
</script>

<style scoped>

</style>
