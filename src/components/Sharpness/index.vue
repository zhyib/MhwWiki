<template>
  <div>
    <el-popover
      placement="top-start"
      width="300"
      trigger="hover"
      :disabled="fullSharp"
    >
      <div v-for="(j, index2) in sharpness" :key="index2">
        <div style="float: left">
          匠{{ 5 - index2 }}&nbsp;&nbsp;
        </div>
        <div>
          <div
            v-for="(block, index) in j"
            :key="index"
            class="colorBlock"
            :style="'width:'+ block / 50 * 100 +'%; background-color:' + blockColor[index] + '; color:' + blockColor[index]"
          >
            &nbsp;
          </div>
        </div>
        <br>
        <br>
      </div>
      <div slot="reference" style="width: 100%">
        <div
          v-for="(block, index) in sharpness[4]"
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
  props: [
    'content',
    'fullSharp'
  ],
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
      ]
    }
  },
  computed: {
    sharpness() {
      console.log('content ' + this.content)
      const returnArray = []
      if (this.content) {
        // 原始输入，匠5
        let ret = this.content
        for (let i = 0; i < 7; i++) {
          if (i < this.content.length) {
          } else {
            ret.push(0)
          }
        }
        ret.push(this.empty[0])
        returnArray.push(ret)
        console.log(returnArray)

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
        return [[], [], [], [], []]
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
    }
  }
}
</script>

<style scoped>
  .colorBlock {
    float: left;
  }
</style>
