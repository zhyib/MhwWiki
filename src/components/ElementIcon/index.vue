<template>
  <img
    class="element-icon"
    :src="require('../../assets/images/icon/element-'+ realName +'.png')"
  />
</template>

<script>
import { nameVal } from '@/utils/nameVal'

export default {
  name: 'ElementIcon',
  props: {
    content: {
      type: String,
      default: null
    }
  },
  computed: {
    realName() {
      return nameVal[this.content]
    }
  }
}
</script>

<style scoped>
  .element-icon {
    width: 15px;
    height: 15px;
  }
</style>
