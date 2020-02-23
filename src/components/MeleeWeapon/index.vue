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
      :indent="14"
    >
      <el-table-column
        prop="name"
        label="武器名"
        width="300px"
      >
        <template v-slot:default="scope">
          <weapon-rare :weapon-name="weaponName" :weapon-rarity="scope.row.rare" />
          <el-popover
            placement="top-start"
            trigger="hover"
          >
            <div>
              {{ childrenName(scope.row) }}
            </div>
            <div slot="reference" style="display: inline">
              {{ scope.row.name }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="attack"
        label="攻击"
      >
        <template v-slot:default="scope">
          <el-popover
            placement="top-start"
            width="150"
            trigger="hover"
          >
            <div style="text-align: center">
              基础攻击：{{ scope.row.attack }}
            </div>
            <div slot="reference" style="text-align: center">
              {{ scope.row.attack * multi }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        v-if="checkList.includes('affinity')"
        key="3"
        prop="affinity"
        label="会心"
      >
        <template v-slot:default="scope">
          <div v-if="scope.row.affinity" style="text-align: center">
            {{ scope.row.affinity }}%
          </div>
          <div v-else style="text-align: center">
            -
          </div>
        </template>
      </el-table-column>
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
          <div v-if="scope.row.elementVal" style="text-align: center; vertical-align: center">
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
                  （
                  <element-icon :content="scope.row.element" />
                  {{ scope.row.elementVal }}）
                </div>
                <div v-else>
                  <element-icon :content="scope.row.element" />
                  {{ scope.row.elementVal }}
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
      >
        <template slot-scope="scope">
          <div style="text-align: center">
            {{ slotString(scope.row.slot) }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sharpness from '@/components/Sharpness/index'
import ElementIcon from '@/components/ElementIcon/index'
import WeaponRare from '@/components/WeaponRare/index'

export default {
  name: 'MeleeWeapon',
  components: {
    'sharpness': Sharpness,
    'element-icon': ElementIcon,
    'weapon-rare': WeaponRare
  },
  props: {
    data: {
      type: Array,
      default: null
    },
    multi: {
      type: Number,
      default: null
    },
    weaponName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      checkList: ['element', 'affinity']
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
      // console.log(this.tableKey)
    }
  },
  methods: {
    filterElement(value, row) {
      console.log(row.element)
      return row.element === value
    },
    slotString(slot) {
      if (slot) {
        let str = slot[0]
        for (let i = 1; i < slot.length; i++) {
          str = str + '-' + slot[i]
        }
        return str
      } else {
        return ''
      }
    },
    childrenName(current) {
      if (current.children) {
        let str = '衍生武器：'
        str = str + current.children[0].name
        for (let i = 1; i < current.children.length; i++) {
          str = str + '，' + current.children[i].name
        }
        return str
      } else {
        return '无衍生武器'
      }
    }
  }
}
</script>
