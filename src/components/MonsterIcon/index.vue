<template>
  <svg-icon
    class="monster-icon"
    :icon-class="realName"
  />
</template>

<script>
import { nameVal } from '@/utils/nameVal'
import SvgIcon from '@/components/SvgIcon/index'

export default {
  name: 'MonsterIcon',
  components: {
    'svg-icon': SvgIcon
  },
  props: {
    content: {
      type: String,
      default: null
    }
  },
  computed: {
    realName() {
      return 'monster' + nameVal[this.content]
    }
  }
}
</script>

<style scoped>
  .element-icon {
    margin-bottom: 5px;
  }
</style>
