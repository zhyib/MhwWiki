<template>
  <div>
    <el-table
      :data="tableData"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="name"
        label="武器名"
      />
      <el-table-column
        prop="attack"
        label="攻击"
        sortable
      />
      <el-table-column
        prop="element"
        label="属性"
      />
      <el-table-column
        prop="elementVal"
        label="属性值"
      />
      <el-table-column
        prop="sharpness"
        label="斩味"
      >
        <template v-slot:default="scope">
          <sharpness :content="scope.row.sharpness"></sharpness>
        </template>
      </el-table-column>
      <el-table-column
        prop="slot"
        label="孔位"
      />
    </el-table>
    <sharpness
      :content="[3, 6, 2, 8, 3, 3, 3]"
    />
  </div>
</template>

<script>
import Sharpness from '@/components/Sharpness/index'

export default {
  name: 'GreatSword',
  components: {
    'sharpness': Sharpness
  },
  data() {
    return {
      tableData: [{
        id: 1,
        name: '防卫队炎刃型大剑I',
        attack: 624,
        element: '爆破',
        elementVal: 240,
        sharpness: [3, 6, 2, 8, 3, 3, 3],
        slot: ''
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {}
}
</script>
