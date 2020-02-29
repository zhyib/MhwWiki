<template>
  <el-row>
    <el-col :span="16">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-show="showStatus.牙龙种" title="牙龙种" name="牙龙种" style="text-align: center">
          <el-table
            ref="table"
            :data="fangData"
            :height="table"
            highlight-current-row
            @row-click="handleRowClick"
          >
            <el-table-column
              prop="icon"
            />
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
      <el-row>
        <el-col :span="12">名称</el-col>
        <el-col :span="12">{{ showData[0].name }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="12">日文名</el-col>
        <el-col :span="12">{{ showData[0].jName }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="12">英文名</el-col>
        <el-col :span="12">{{ showData[0].eName }}</el-col>
      </el-row>

      <el-table
        :data="showData"
      >
        <el-table-column
          label="血量">
          <el-table-column
            label="下位"
            prop="hpL"
          />
          <el-table-column
            label="上位"
            prop="hpH"
          />
          <el-table-column
            label="大师"
            prop="hpM"
          />
          <el-table-column
            label="捕获血量"
            prop="capture"
          >
            <template v-slot:default="scope">
              {{ scope.row.capture }}%
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
      <el-table
        :data="showData"
      >
        <el-table-column
          label="愤怒">
          <el-table-column
            label="持续时间(s)"
            prop="angerTime"
          />
          <el-table-column
            label="攻击补正(%)"
            prop="angerAtk"
          />
          <el-table-column
            label="防御补正(%)"
            prop="angerDef"
          />
          <el-table-column
            label="速度补正(%)"
            prop="angerSpd"
          />
        </el-table-column>
      </el-table>

      <el-table
        :data="showData"
      >
        <el-table-column
          prop="parts"
        />
        <el-table-column
          prop="parts"
        />
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Monster',
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
      elements: ['火', '水', '雷', '冰', '龙', '毒', '眠', '麻', '绝'],
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
        summary: [3, 0, 2, 2, 1, 3, 3, 3, 3, 3]
      }
      ]
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
    }
  }
}
</script>

<style>
  .el-collapse-item__content {
    padding-bottom: 0 !important;
  }
</style>
