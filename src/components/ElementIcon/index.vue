<template>
  <svg-icon
    class="element-icon"
    :icon-class="realName"
  />
</template>

<script>
import { nameVal } from '@/utils/nameVal'
import SvgIcon from '@/components/SvgIcon/index'

export default {
  name: 'ElementIcon',
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
      return 'element' + nameVal[this.content]
    }
  }
}
</script>

<style scoped>
  .element-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
  }
</style>
