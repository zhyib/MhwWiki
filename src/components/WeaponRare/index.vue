<template>
  <el-popover
    placement="top-start"
    width="20"
    trigger="hover"
  >
    <div style="text-align: center">
      Rare {{ weaponRarity }}
    </div>
    <img
      slot="reference"
      class="weapon-rare"
      :src="require('../../assets/images/icon/rare-'+ weaponName + '-'+ weaponRarity +'.png')"
    />
  </el-popover>
</template>

<script>
export default {
  name: 'WeaponRare',
  props: {
    weaponName: {
      type: String,
      default: null
    },
    weaponRarity: {
      type: Number,
      default: null
    }
  }
}
</script>

<style scoped>
  .weapon-rare {
    width: 15px;
    height: 15px;
  }
</style>
