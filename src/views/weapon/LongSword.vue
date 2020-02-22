<template>
  <melee-weapon :data="tableData" :multi="3.3" />
</template>

<script>
import MeleeWeapon from '@/components/MeleeWeapon/index'

export default {
  name: 'LongSword',
  components: {
    'melee-weapon': MeleeWeapon
  },
  data() {
    return {
      tableData: [{
        id: 1,
        rare: 1,
        name: '防卫队连刃式太刀I',
        attack: 130,
        element: '爆破',
        elementVal: 180,
        sharpness: [3, 6, 2, 14],
        children: [{
          id: 2,
          rare: 3,
          name: '防卫队连刃式太刀II',
          attack: 170,
          element: '爆破',
          elementVal: 210,
          sharpness: [3, 6, 2, 15, 4],
          children: [{
            id: 3,
            rare: 5,
            name: '防卫队连刃式太刀III',
            attack: 190,
            element: '爆破',
            elementVal: 240,
            sharpness: [5, 5, 5, 8, 12],
            children: [{
              id: 4,
              rare: 6,
              name: '防卫队连刃式太刀IV',
              attack: 210,
              element: '爆破',
              elementVal: 270,
              sharpness: [3, 5, 5, 8, 14],
              children: [{
                id: 5,
                rare: 7,
                name: '防卫队连刃式太刀V',
                attack: 220,
                element: '爆破',
                elementVal: 300,
                sharpness: [9, 3, 3, 11, 4, 10]
              }]
            }]
          }]
        }]
      }, {
        id: 6,
        rare: 1,
        name: '铁刀I',
        attack: 80,
        sharpness: [10, 5, 8, 2],
        children: [{
          id: 7,
          rare: 1,
          name: '铁刀II',
          attack: 90,
          sharpness: [8, 7, 3, 7],
          children: [{
            id: 8,
            rare: 2,
            name: '铁刀III',
            attack: 100,
            sharpness: [6, 7, 3, 9],
            children: [{
              id: 9,
              rare: 3,
              name: '铁刀【禊】I',
              attack: 110,
              sharpness: [8, 5, 8, 9],
              children: [{
                id: 10,
                rare: 4,
                name: '铁刀【禊】II',
                attack: 130,
                sharpness: [7, 5, 8, 10],
                children: [{
                  id: 11,
                  rare: 5,
                  name: '铁刀【禊】III',
                  attack: 140,
                  element: '水',
                  elementVal: 120,
                  elementHide: true,
                  sharpness: [9, 5, 5, 8, 8],
                  slot: '1',
                  children: [{
                    id: 12,
                    rare: 6,
                    name: '铁刀【神乐】I',
                    attack: 160,
                    element: '水',
                    elementVal: 150,
                    elementHide: true,
                    sharpness: [7, 5, 5, 8, 10],
                    slot: '1',
                    children: [{
                      id: 13,
                      rare: 6,
                      name: '铁刀【神乐】II',
                      attack: 180,
                      element: '水',
                      elementVal: 180,
                      elementHide: true,
                      sharpness: [5, 6, 2, 15, 9, 3],
                      slot: '11',
                      children: [{
                        id: 14,
                        rare: 9,
                        name: '铁刀【神威】I',
                        attack: 220,
                        element: '水',
                        elementVal: 210,
                        elementHide: true,
                        sharpness: [9, 8, 3, 3, 8, 9],
                        slot: '11',
                        children: [{
                          id: 15,
                          rare: 10,
                          name: '铁刀【神威】II',
                          attack: 240,
                          element: '水',
                          elementVal: 240,
                          elementHide: true,
                          sharpness: [8, 8, 3, 3, 8, 10],
                          slot: '11',
                          children: [{
                            id: 16,
                            rare: 11,
                            name: '铁刀【神威】III',
                            attack: 260,
                            element: '水',
                            elementVal: 270,
                            elementHide: true,
                            sharpness: [12, 3, 3, 6, 5, 8, 3],
                            slot: '11'
                          }, {
                            id: 17,
                            rare: 10,
                            name: '大刀【鸟】',
                            attack: 260,
                            affinity: 20,
                            element: '毒',
                            elementVal: 210,
                            sharpness: [15, 3, 9, 3, 3, 5, 2],
                            slot: '3',
                            children: [{
                              id: 18,
                              rare: 10,
                              name: '大刀【狼】',
                              attack: 270,
                              affinity: 25,
                              element: '毒',
                              elementVal: 240,
                              sharpness: [14, 3, 9, 3, 3, 6, 2],
                              slot: '3'
                            }]
                          }]
                        }]
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
  }
}
</script>
