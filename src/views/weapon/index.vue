<template>
  <el-table :data="tableData" border style="width: 60%">
    <el-table-column prop="name" label="名称" align="center" width="180"></el-table-column>
    <el-table-column prop="image" label="" align="center">
      <template v-slot:default="scope">
        <img :src="avatar" style="width: 36px;height:36px">
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import avatar from "@/assets/images/weaponWith/GreatSword.png"

export default {
  data() {
    return {
      avatar: avatar,
      tableData: [{
        name: '大剑',
        image: this.avatar
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>