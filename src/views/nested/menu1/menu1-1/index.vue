<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="" type="success">
      <h1>正在施工！</h1>
      <h3>武器页面样板请参考“
        <el-button type="text" @click="jump()">
          太刀
        </el-button>
        ”页面
      </h3>
    </el-alert>
  </div>
</template>

<script>
export default {
  methods: {
    jump() {
      this.$router.push({ path: '/weapon/LongSword' })
    }
  }
}
</script>
