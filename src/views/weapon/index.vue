<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="2"/>
      <el-col v-for="nameW in names[0]" :key="nameW" :span="5">
        <el-card
          class="weapon-card"
        >
          <div class="weapon-image">
            <el-image
              class="weapon-image-inner"
              :src="require('../../assets/images/weaponWith/'+nameW+'.png')"
              fit="contain"
            />
          </div>
          <div class="weapon-name">
            <el-button type="text">{{ nameW }}</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <br>
    <el-row type="flex" justify="center">
      <el-col :span="2"/>
      <el-col v-for="nameW in names[1]" :key="nameW" :span="5">
        <el-card
          class="weapon-card"
        >
          <div class="weapon-image">
            <el-image
              class="weapon-image-inner"
              :src="require('../../assets/images/weaponWith/'+nameW+'.png')"
              fit="contain"
            />
          </div>
          <div class="weapon-name">
            <el-button type="text">{{ nameW }}</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <br>
    <el-row type="flex" justify="center">
      <el-col :span="2"/>
      <el-col v-for="nameW in names[2]" :key="nameW" :span="5">
        <el-card
          class="weapon-card"
        >
          <div class="weapon-image">
            <el-image
              class="weapon-image-inner"
              :src="require('../../assets/images/weaponWith/'+nameW+'.png')"
              fit="contain"
            />
          </div>
          <div class="weapon-name">
            <el-button type="text">{{ nameW }}</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <br>
    <el-row type="flex" justify="center">
      <el-col :span="2"/>
      <el-col v-for="nameW in names[3]" :key="nameW" :span="5">
        <el-card
          class="weapon-card"
        >
          <div class="weapon-image">
            <el-image
              class="weapon-image-inner"
              :src="require('../../assets/images/weaponWith/'+nameW+'.png')"
              fit="contain"
            />
          </div>
          <div class="weapon-name">
            <el-button type="text">{{ nameW }}</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [['大剑', '太刀', '单手剑', '双剑'],
        ['大锤', '狩猎笛', '长枪', '铳枪'],
        ['斩击斧', '充能斧', '操虫棍'],
        ['轻弩', '重弩', '弓']
      ],
      name: ['大剑', '太刀', '单手剑', '双剑',
        '大锤', '狩猎笛', '长枪', '铳枪',
        '斩击斧', '充能斧', '操虫棍',
        '轻弩', '重弩', '弓']
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
