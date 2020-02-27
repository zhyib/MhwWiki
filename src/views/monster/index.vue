<template>
  <el-row>
    <el-col :span="16">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-show="showStatus.牙龙种" title="牙龙种" name="牙龙种" style="text-align: center">
          <el-table
            ref="table"
            :data="fangData"
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
    <el-col :span="8">
      <div></div>
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
      elements: ['火', '水', '雷', '冰', '龙', '毒', '眠', '麻', '绝'],
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
          [80, 85, 75, 30, 0, 15, 20, 10],
          [65, 70, 60, 20, 0, 5, 10, 5],
          [50, 45, 40, 20, 0, 5, 10, 0],
          [90, 95, 85, 30, 0, 15, 20, 10],
          [45, 40, 35, 15, 0, 5, 5, 0],
          [65, 60, 55, 25, 0, 10, 15, 5],
          [45, 40, 35, 15, 0, 0, 5, 0],
          [45, 45, 40, 15, 0, 0, 5, 0]
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
    }
  }
}
</script>

<style>
  .el-collapse-item__content {
    padding-bottom: 0 !important;
  }
</style>
