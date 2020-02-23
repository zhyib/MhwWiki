<template>
  <div>
    <el-popover
      placement="top-start"
      width="300"
      trigger="click"
      :disabled="fullSharp"
    >
      <div v-for="(row, index2) in sharpness" :key="index2">
        <div style="float: left; width: 70px">
          匠{{ 5 - index2 }}&nbsp;&nbsp;{{ rest(row) }}
        </div>
        <div style="float: left; width: 200px">
          <div
            v-for="(block, index) in row"
            :key="index"
            class="colorBlock"
            :style="'width:'+ block / 40 * 100 +'%; background-color:' + blockColor[index] + '; color:' + blockColor[index]"
          >
            &nbsp;
          </div>
        </div>
        <br>
        <br>
      </div>
      <div slot="reference" style="width: 100%">
        <div
          v-for="(block, index) in sharpness[indexComputed]"
          :key="index"
          class="colorBlock"
          :style="'width:'+ block / 40 * 100 +'%; background-color:' + blockColor[index] + '; color:' + blockColor[index]"
        >
          &nbsp;
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      default: null
    },
    full: Boolean
  },
  data() {
    return {
      blockColor: [
        '#bf3541',
        '#d4673a',
        '#cab32e',
        '#6eb017',
        '#4478e7',
        '#e3e3e3',
        '#8854f0',
        '#383838'
      ],
      colorName: ['红', '橙', '黄', '绿', '蓝', '白', '紫']
    }
  },
  computed: {
    sharpness() {
      // console.log('content' + this.content)
      // console.log('fullsharp' + this.fullSharp)
      const returnArray = []
      console.log(this.content)
      if (this.content.length < 8) {
        // 原始输入，匠5
        // 这里是浅拷贝，草
        let ret = this.content
        const pushLength = 7 - this.content.length
        for (let i = 0; i < pushLength; i++) {
          ret.push(0)
        }
        ret.push(this.empty[0])
        returnArray.push(ret)
        // console.log(returnArray)

        for (let j = 0; j < 5; j++) {
          // 匠4开始递减
          const temp = []
          for (let k = 0; k < ret.length; k++) {
            // copy
            temp.push(ret[k].valueOf())
          }
          for (let k = 6; k >= 0; k--) {
            if (temp[k] > 0) {
              temp[k]--
              temp[7] = this.empty[j + 1]
              ret = temp
              returnArray.push(temp)
              break
            }
          }
        }
        // console.log(returnArray)
        return returnArray
      } else {
        // 已经计算过的从这里开始
        let ret = this.content
        returnArray.push(ret)
        for (let j = 0; j < 5; j++) {
          // 匠4开始递减
          const temp = []
          for (let k = 0; k < ret.length; k++) {
            // copy
            temp.push(ret[k].valueOf())
          }
          for (let k = 6; k >= 0; k--) {
            if (temp[k] > 0) {
              temp[k]--
              temp[7] = this.empty[j + 1]
              ret = temp
              returnArray.push(temp)
              break
            }
          }
        }
        // console.log(returnArray)
        return returnArray
      }
    },
    empty() {
      if (this.fullSharp) {
        return [0, 0, 0, 0, 0]
      } else {
        const returnArray = []
        let ret = 40
        if (this.content) {
          for (let i = 0; i < 7; i++) {
            if (i < this.content.length) {
              ret -= this.content[i]
            }
          }
          returnArray.push(ret)
          returnArray.push(ret + 1)
          returnArray.push(ret + 2)
          returnArray.push(ret + 3)
          returnArray.push(ret + 4)
          returnArray.push(ret + 5)
          return returnArray
        } else {
          console.log('empty content')
          return [40, 40, 40, 40, 40]
        }
      }
    },
    fullSharp() {
      return this.full
    },
    indexComputed() {
      return this.fullSharp ? 0 : 5
    }
  },
  methods: {
    rest(row) {
      for (let i = 6; i >= 0; i--) {
        if (row[i] !== 0) {
          return (row[i] * 10).toString() + this.colorName[i]
        }
      }
    }
  }
}
</script>

<style scoped>
  .colorBlock {
    float: left;
  }
</style>
