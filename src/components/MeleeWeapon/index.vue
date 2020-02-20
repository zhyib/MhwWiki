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
  name: 'MeleeWeapon',
  components: {
    'sharpness': Sharpness
  },
  props: [
    'data'
  ],
  computed: {
    tableData() {
      return this.data
    }
  }
}
</script>
