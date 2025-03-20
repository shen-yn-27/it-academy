<script setup>
import { ref } from "vue";

let block = ref(+prompt('1 - светлый, 2 - сталь, 3 - сине-зелёно-серый, 4 - закончить игру '))
let blocks = ref([ block.value ])
let xie = ref('')
let ta = ref('')
let bai = ref('')
let liu = ref('')

function liuge() {
  while (block.value !== 4) {
    block.value = +prompt('1 - светлый, 2 - сталь, 3 - сине-зелёно-серый, 4 - закончить игру ')
    blocks.value.push(block.value)
  }

  // if (block === '1') {
  //   xie.value = xie.value + ta.value
  //   prompt('1 - светлый, 2 - сталь, 3 - сине-зелёно-серый, 4 - закончить игру ')
  // }
  // if (block === '2') {
  //   xie.value = xie.value + bai.value
  //   prompt('1 - светлый, 2 - сталь, 3 - сине-зелёно-серый, 4 - закончить игру ')
  // }
  // if (block === '3') {
  //   xie.value = xie.value + liu.value
  //   prompt('1 - светлый, 2 - сталь, 3 - сине-зелёно-серый, 4 - закончить игру ')
  // }
}

liuge()

</script>

<template>
  <div class="xie">
    <div
        v-for="block in blocks"
        :class="{'ta': block === 1, 'bai': block === 2, 'liu' : block === 3}"
    >
    </div>
<!--    <div class="bai"></div>-->
<!--    <div class="liu"></div>-->
  </div>

</template>

<style scoped>
.xie {
  display: flex;
  flex-direction: row;
}
.ta {
  background-color: lightcyan;
  height: 300px;
  width: 300px;
}
.bai {
  background-color: steelblue;
  height: 300px;
  width: 300px;
}
.liu {
  background-color: darkslategrey;
  height: 300px;
  width: 300px;
}
</style>