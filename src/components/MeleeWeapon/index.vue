<template>
  <div>
    <div style="float: right; padding-right: 50px; height: 30px; padding-top: 7px">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="affinity">
          会心
        </el-checkbox>
        <el-checkbox label="defence">
          防御
        </el-checkbox>
        <el-checkbox label="element">
          属性
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <el-table
      :data="tableData"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :indent="6"
    >
      <el-table-column
        prop="name"
        label="武器名"
        width="300px"
      />
      <el-table-column
        prop="attack"
        label="攻击"
      >
        <template v-slot:default="scope">
          <div style="text-align: center">
            {{ scope.row.attack * multi }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        v-if="checkList.includes('affinity')"
        key="3"
        prop="affinity"
        label="会心"
      />
      <el-table-column
        v-if="checkList.includes('defence')"
        key="1"
        prop="defence"
        label="防御"
      />
      <el-table-column
        v-if="checkList.includes('element')"
        key="2"
        prop="element"
        label="属性"
      >
        <template v-slot:default="scope">
          <div style="text-align: center">
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
          </div>
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
  data() {
    return {
      checkList: ['element', 'defence', 'affinity']
    }
  },
  computed: {
    tableData() {
      return this.data
    }
  },
  watch: {
    checkList(valArr) {
      // this.tableKey--
      console.log(this.tableKey)
    }
  },
  methods: {
    filterElement(value, row) {
      console.log(row.element)
      return row.element === value
    }
  }
}
</script>
