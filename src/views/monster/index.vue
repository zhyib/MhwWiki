<template>
  <el-row>
    <el-col :span="16">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-show="showStatus.牙龙种" title="牙龙种（点击条目查看数据）" name="牙龙种" style="text-align: center">
          <el-table
            ref="table"
            :data="fangData"
            :height="table"
            highlight-current-row
            @row-click="handleRowClick"
          >
            <el-table-column
              prop="icon"
            >
              <template v-slot:default="scope">
                <monster-icon :content="scope.row.name" style="width: 50px; height: 50px" />
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="名称"
            />
            <el-table-column
              v-for="(element, index) in elements"
              :key="index"
              prop="summary"
              :label="element"
            >
              <template v-slot:default="scope">
                {{ scope.row.summary[index] }}
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item v-show="showStatus.鸟龙种" title="鸟龙种" name="鸟龙种" style="text-align: center">
          <el-table
            ref="table"
            :data="tableData"
            :height="table"
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
        <el-collapse-item v-show="showStatus.兽龙种" title="兽龙种" name="兽龙种" style="text-align: center">
          <el-table
            ref="table"
            :data="tableData"
            :height="table"
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
        <el-collapse-item v-show="showStatus.飞龙种" title="飞龙种" name="飞龙种" style="text-align: center">
          <el-table
            ref="table"
            :data="tableData"
            :height="table"
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
    <el-col v-if="showData[0] !== undefined" :span="8">
      <div :style="dataHeight">
        <el-row>
          <el-col :span="10">
            <el-image
              :src="require('../../assets/images/monsterRender/'+nameTrans['贼龙']+'.png')"
              fit="contain"
              style="height: 200px"
            />
          </el-col>
          <el-col :span="14">
            <el-table
              :data="showData"
              style="margin-top: 40px"
            >
              <el-table-column
                label="中文名"
                prop="name"
                align="center"
              />
              <el-table-column
                label="日文名"
                prop="jName"
                align="center"
              />
              <el-table-column
                label="英文名"
                prop="eName"
                align="center"
              />
            </el-table>
          </el-col>
        </el-row>
        <el-table
          :data="showData"
        >
          <el-table-column
            label="血量">
            <el-table-column
              label="下位"
              prop="hpL"
              align="center"
            />
            <el-table-column
              label="上位"
              prop="hpH"
              align="center"
            />
            <el-table-column
              label="大师"
              prop="hpM"
              align="center"
            />
            <el-table-column
              label="捕获血量"
              prop="capture"
              align="center"
            >
              <template v-slot:default="scope">
                {{ scope.row.capture }}%
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <el-table
          :data="showData"
          style="margin-top:10px"
        >
          <el-table-column
            label="愤怒">
            <el-table-column
              label="持续时间(s)"
              prop="angerTime"
              align="center"
            />
            <el-table-column
              label="攻击补正(%)"
              prop="angerAtk"
              align="center"
            />
            <el-table-column
              label="防御补正(%)"
              prop="angerDef"
              align="center"
            />
            <el-table-column
              label="速度补正(%)"
              prop="angerSpd"
              align="center"
            />
          </el-table-column>
        </el-table>
        <table class="weak-table">
          <thead>
            <tr>
              <th>部位</th>
              <th>
                <weapon-icon content="大剑" />
              </th>
              <th>
                <weapon-icon content="大锤" />
              </th>
              <th>
                <weapon-icon content="重弩" />
              </th>
              <th>
                <element-icon content="火" />
              </th>
              <th>
                <element-icon content="水" />
              </th>
              <th>
                <element-icon content="雷" />
              </th>
              <th>
                <element-icon content="冰" />
              </th>
              <th>
                <element-icon content="龙" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in showData[0].weak" :key="index">
              <td class="parts">{{ showData[0].parts[index] }}</td>
              <td :style="weakness(showData[0].weak[0][index])">{{ showData[0].weak[0][index] }}</td>
              <td :style="weakness(showData[0].weak[1][index])">{{ showData[0].weak[1][index] }}</td>
              <td :style="weakness(showData[0].weak[2][index])">{{ showData[0].weak[2][index] }}</td>
              <td>{{ showData[0].weak[3][index] }}</td>
              <td>{{ showData[0].weak[4][index] }}</td>
              <td>{{ showData[0].weak[5][index] }}</td>
              <td>{{ showData[0].weak[6][index] }}</td>
              <td>{{ showData[0].weak[7][index] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import MonsterIcon from '@/components/MonsterIcon/index'
import ElementIcon from '@/components/ElementIcon/index'
import WeaponIcon from '@/components/WeaponIcon/index'
import { nameVal } from '@/utils/nameVal'

export default {
  name: 'Monster',
  components: {
    'monster-icon': MonsterIcon,
    'element-icon': ElementIcon,
    'weapon-icon': WeaponIcon
  },
  data() {
    return {
      activeNames: [],
      table: window.innerHeight - 110, // 固定表头高度
      showStatus: {
        '牙龙种': true,
        '鸟龙种': true,
        '兽龙种': true,
        '飞龙种': true
      },
      showData: [],
      elements: ['火', '水', '雷', '冰', '龙', '毒', '爆破', '睡眠', '麻痹', '气绝'],
      tableData: [],
      fangData: [{
        name: '贼龙',
        jName: 'ドスジャグラス',
        eName: 'Great Jagras',
        hpL: 1342,
        hpH: 3850,
        hpM: 12650,
        capture: 30,
        angerTime: 60,
        angerAtk: 110,
        angerDef: 90,
        angerSpd: 110,
        parts: ['头', '颈', '身体', '身体（满腹）', '背', '前脚', '后脚', '尾'],
        weak: [
          [80, 65, 50, 90, 45, 65, 45, 45],
          [85, 70, 45, 95, 40, 60, 40, 45],
          [75, 60, 40, 85, 35, 55, 35, 40],
          [30, 20, 20, 30, 15, 25, 15, 15],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [20, 10, 10, 20, 5, 15, 5, 5],
          [15, 5, 5, 15, 5, 10, 0, 0],
          [10, 5, 0, 10, 0, 5, 0, 0]
        ],
        summary: [3, 0, 2, 2, 1, 3, 3, 3, 3, 3, 3]
      }
      ]
    }
  },
  computed: {
    nameTrans() {
      return nameVal
    },
    dataHeight() {
      // 右半边动态高度
      const height = this.table + 50
      return 'height: ' + height + 'px; overflow-x: auto'
    }
  },
  methods: {
    handleChange(val) {
      if (val.length === 0) {
        // console.log('收起')
        setTimeout(this.showAll, 300)
      } else {
        // console.log('展开' + val[0])
        for (const i in this.showStatus) {
          if (i !== val[0]) {
            this.showStatus[i] = false
          }
        }
      }
    },
    showAll() {
      for (const i in this.showStatus) {
        this.showStatus[i] = true
      }
    },
    handleRowClick(row, column, event) {
      if (this.showData.length !== 1) {
        this.showData.push(row)
      }
    },
    weakness(value) {
      // 触发弱点特效技能
      if (value >= 45) {
        return 'font-weight: bold'
      }
    }
  }
}
</script>

<style>
  .el-collapse-item__content {
    padding-bottom: 0 !important;
  }

  .el-collapse-item__header {
    margin-left: 15px;
    font-weight: bold;
    color: #606266;
  }

  .weak-table {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  .weak-table thead {
    color: #909399;
    background-color: #F5F7FA;
  }

  .weak-table th {
    border: 1px solid #D0D0D0;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .weak-table td {
    border: 1px solid #D0D0D0;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .parts {
    color: #909399;
    background-color: #F5F7FA;
  }
</style>
