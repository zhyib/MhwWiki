<template>
  <svg-icon
    class="weapon-icon"
    :icon-class="realName"
  />
</template>

<script>
import { nameVal } from '@/utils/nameVal'
import SvgIcon from '@/components/SvgIcon/index'

export default {
  name: 'WeaponIcon',
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
      return 'weapon' + nameVal[this.content]
    }
  }
}
</script>

<style scoped>
  .weapon-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
  }
</style>
