<template>
  <melee-weapon :data="tableData"></melee-weapon>
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
        name: '防卫队炎刃型大剑I',
        attack: 624,
        affinity: '',
        element: '爆破',
        elementVal: 240,
        sharpness: [3, 6, 2, 14],
        fullSharp: false,
        slot: '',
        children: [{
          id: 11,
          name: '防卫队炎刃型大剑II',
          attack: 816,
          affinity: '',
          element: '爆破',
          elementVal: 270,
          sharpness: [3, 6, 2, 15, 4],
          fullSharp: false,
          slot: '',
          children: [{
            id: 111,
            name: '防卫队炎刃型大剑III',
            attack: 912,
            affinity: '',
            element: '爆破',
            elementVal: 330,
            sharpness: [5, 5, 5, 8, 12],
            fullSharp: false,
            slot: '',
            children: [{
              id: 1111,
              name: '防卫队炎刃型大剑IV',
              attack: 1008,
              affinity: '',
              element: '爆破',
              elementVal: 360,
              sharpness: [3, 5, 5, 8, 14],
              fullSharp: false,
              slot: '',
              children: [{
                id: 11111,
                name: '防卫队炎刃型大剑V',
                attack: 1056,
                affinity: '',
                element: '爆破',
                elementVal: 390,
                sharpness: [9, 3, 3, 11, 4, 10],
                fullSharp: false,
                slot: ''
              }]
            }]
          }]
        }]
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {}
}
</script>
