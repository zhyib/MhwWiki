<template>
  <div style="width: 100%">
    <div
      v-for="(block, index) in sharpness"
      :key="index"
      class="colorBlock"
      :style="'width:'+ block / 40 * 100 +'%; background-color:' + blockColor[index] + '; color:' + blockColor[index]"
    >
      ]
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'content'
  ],
  data() {
    return {
      sharpness: [],
      empty: 40,
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
  watch: {
    content(self) {
      this.sharpness = self
      for (let i = 0; i < 7; i++) {
        if (i < self.length) {
          console.log(self.length)
          this.empty -= this.sharpness[i]
        } else {
          this.sharpness.push(0)
        }
      }
      this.sharpness.push(this.empty)
    }
  }
}
</script>

<style scoped>
  .colorBlock {
    float: left;
  }
</style>
