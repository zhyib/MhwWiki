<template>
  <div>
    <el-table
      :data="tableData"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column
        prop="name"
        label="武器名"
      />
      <el-table-column
        prop="attack"
        label="攻击"
      >
        <template v-slot:default="scope">
          {{ scope.row.attack * multi }}
        </template>
      </el-table-column>
      <el-table-column
        prop="affinity"
        label="会心"
      />
      <el-table-column
        prop="element"
        label="属性"
      >
        <template v-slot:default="scope">
          <el-popover
            placement="top-start"
            width="150"
            trigger="hover"
            :disabled="scope.row.elderSeal == null"
          >
            <div style="text-align: center">
              龙封力 {{ scope.row.elderSeal }}
            </div>
            <div slot="reference">
              <div v-if="scope.row.elementHide">
                （{{ scope.row.element }} {{ scope.row.elementVal }}）
              </div>
              <div v-else>
                {{ scope.row.element }} {{ scope.row.elementVal }}
              </div>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="sharpness"
        label="斩味"
      >
        <template slot-scope="scope">
          <sharpness :content="scope.row.sharpness" :full="scope.row.fullSharp" />
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
  props: {
    data: {
      type: Array,
      default: null
    },
    multi: {
      type: Number,
      default: null
    }
  },
  computed: {
    tableData() {
      return this.data
    }
  }
}
</script>
