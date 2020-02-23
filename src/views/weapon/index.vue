<template>
  <div>
    <div v-for="(nameRow, indexRow) in names" :key="indexRow">
      <el-row type="flex" justify="center">
        <el-col :span="2" />
        <el-col v-for="(name, index) in nameRow" :key="index" :span="5">
          <el-card class="weapon-card">
            <div class="weapon-image">
              <el-image
                class="weapon-image-inner"
                :src="require('../../assets/images/weaponWith/'+name+'.png')"
                fit="contain"
              />
            </div>
            <div class="weapon-name">
              <el-button type="text" @click="jump(name)">{{ name }}</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <br>
    </div>
  </div>
</template>

<script>
import { nameVal } from '@/utils/nameVal'

export default {
  data() {
    return {
      names: [['大剑', '太刀', '单手剑', '双剑'],
        ['大锤', '狩猎笛', '长枪', '铳枪'],
        ['斩击斧', '充能斧', '操虫棍'],
        ['轻弩', '重弩', '弓']
      ]
    }
  },
  methods: {
    jump: function(name) {
      this.$router.push({ path: '/weapon/' + nameVal[name] })
    }
  }
}
</script>

<style scoped>
  .weapon-card {
    width: 250px;
    height: 280px;
  }

  .weapon-image {
    text-align: center;
    vertical-align: middle;
  }

  .weapon-image-inner {
    width: 200px;
    height: 200px;
  }

  .weapon-name {
    text-align: center;
    position: relative;
    top: 5px;
  }
</style>
