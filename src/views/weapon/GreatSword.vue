<template>
  <melee-weapon :data="tableData" :multi="4.8" />
</template>

<script>
import MeleeWeapon from '@/components/MeleeWeapon/index'

export default {
  name: 'GreatSword',
  components: {
    'melee-weapon': MeleeWeapon
  },
  data() {
    return {
      tableData: [{
        id: 1,
        rare: 1,
        name: '防卫队炎刃型大剑 I',
        attack: 130,
        element: '爆破',
        elementVal: 240,
        sharpness: [3, 6, 2, 14],
        children: [{
          id: 11,
          rare: 3,
          name: '防卫队炎刃型大剑 II',
          attack: 170,
          element: '爆破',
          elementVal: 270,
          sharpness: [3, 6, 2, 15, 4],
          children: [{
            id: 111,
            rare: 5,
            name: '防卫队炎刃型大剑 III',
            attack: 190,
            element: '爆破',
            elementVal: 330,
            sharpness: [5, 5, 5, 8, 12],
            children: [{
              id: 1111,
              rare: 6,
              name: '防卫队炎刃型大剑 IV',
              attack: 210,
              element: '爆破',
              elementVal: 360,
              sharpness: [3, 5, 5, 8, 14],
              children: [{
                id: 11111,
                rare: 7,
                name: '防卫队炎刃型大剑 V',
                attack: 220,
                element: '爆破',
                elementVal: 390,
                sharpness: [9, 3, 3, 11, 4, 10]
              }]
            }]
          }]
        }]
      }, {
        id: 2,
        rare: 1,
        name: '巨剑 I',
        attack: 80,
        sharpness: [10, 5, 8, 2],
        fullSharp: false,
        children: [{
          id: 21,
          rare: 1,
          name: '巨剑 II',
          attack: 90,
          sharpness: [7, 7, 3, 8],
          children: [{
            id: 211,
            rare: 2,
            name: '巨剑 III',
            attack: 100,
            sharpness: [6, 7, 3, 9],
            children: [{
              id: 2111,
              rare: 3,
              name: '巨刃剑 I',
              attack: 120,
              sharpness: [7, 5, 8, 10],
              children: [{
                id: 21111,
                rare: 4,
                name: '巨刃剑 II',
                attack: 130,
                sharpness: [6, 5, 8, 11],
                children: [{
                  id: 211111,
                  rare: 5,
                  name: '巨刃剑 III',
                  attack: 140,
                  element: '毒',
                  elementVal: 240,
                  elementHide: true,
                  sharpness: [10, 5, 5, 8, 7],
                  slot: '1',
                  children: [{
                    id: 2111111,
                    rare: 6,
                    name: '铬钢剃刀 I',
                    attack: 150,
                    element: '毒',
                    elementVal: 330,
                    elementHide: true,
                    sharpness: [9, 5, 5, 8, 8],
                    slot: '1',
                    children: [{
                      id: 21111111,
                      rare: 6,
                      name: '铬钢剃刀 II',
                      attack: 180,
                      element: '毒',
                      elementVal: 420,
                      elementHide: true,
                      sharpness: [6, 6, 2, 15, 9],
                      slot: '11'
                    }, {
                      id: 21111112,
                      rare: 7,
                      name: '灭尽龙的裁决',
                      attack: 190,
                      element: '龙',
                      elementVal: 120,
                      elderSeal: '大',
                      sharpness: [12, 12, 4, 5, 7],
                      fullSharp: true,
                      slot: '1',
                      children: [{
                        id: 211111121,
                        rare: 8,
                        name: '灭鬼凶器',
                        attack: 210,
                        element: '龙',
                        elementVal: 150,
                        elderSeal: '大',
                        sharpness: [11, 12, 4, 5, 8],
                        fullSharp: true,
                        slot: '1'
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }
  },
  methods: {}
}
</script>
