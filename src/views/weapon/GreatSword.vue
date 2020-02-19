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
        prop="affinity"
        label="会心"
        sortable
      />
      <el-table-column
        prop="element"
        label="属性"
      >
        <template v-slot:default="scope">
          {{ scope.row.element }} {{ scope.row.elementVal }}
        </template>
      </el-table-column>
      <el-table-column
        prop="sharpness"
        label="斩味"
      >
        <template slot-scope="scope">
          <sharpness :content="scope.row.sharpness" :full="scope.row.fullSharp"></sharpness>
        </template>
      </el-table-column>
      <el-table-column
        prop="slot"
        label="孔位"
      />
    </el-table>
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
        affinity: '',
        element: '爆破',
        elementVal: 240,
        sharpness: [3, 6, 2, 14],
        fullSharp: false,
        slot: '',
        children: [{
          id: 11,
          name: '防卫队炎刃型大剑II',
          attack: 816,
          affinity: '',
          element: '爆破',
          elementVal: 270,
          sharpness: [3, 6, 2, 15, 4],
          fullSharp: false,
          slot: '',
          children: [{
            id: 111,
            name: '防卫队炎刃型大剑III',
            attack: 912,
            affinity: '',
            element: '爆破',
            elementVal: 330,
            sharpness: [5, 5, 5, 8, 12],
            fullSharp: false,
            slot: '',
            children: [{
              id: 1111,
              name: '防卫队炎刃型大剑IV',
              attack: 1008,
              affinity: '',
              element: '爆破',
              elementVal: 360,
              sharpness: [3, 5, 5, 8, 14],
              fullSharp: false,
              slot: '',
              children: [{
                id: 11111,
                name: '防卫队炎刃型大剑V',
                attack: 1056,
                affinity: '',
                element: '爆破',
                elementVal: 390,
                sharpness: [9, 3, 3, 11, 4, 10],
                fullSharp: false,
                slot: ''
              }]
            }]
          }]
        }]
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
