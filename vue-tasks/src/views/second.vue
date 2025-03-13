<script setup>
import { ref } from "vue";
let raf = ref('')
let faf = ref([])
let naf = ref('')

function taf() {
  for (let i = 0; i < naf.value; i++) {
    faf.value.push(raf.value)
  }
}

let rof = ref('')
let fof = ref([])
let nof = ref('')

function tof() {
  for (let i = 0; i < nof.value; i++) {
    fof.value.push(rof.value)
  }
}
alert('49%...........')
</script>

<template>
  <div class="sa">
    <h3>Имена</h3>
    <div class="xa">Укажите имя</div>
    <input v-model="raf">
    <div class="xa">Сколько добавить</div>
    <div>
      <input v-model="naf">
    </div>
    <button
        @click="taf"
        class="aa"
    >
      Добавить
    </button>
    <h3>Место для добавления</h3>
    <ul>
      <li
          v-for="name in faf"
          class="waf"
      >
        <i>{{ name}}</i>
      </li>
    </ul>
  </div>

  <div class="wa">
    <h3>Города</h3>
    <div class="xa">Укажите город</div>
    <input v-model="rof">
    <div class="xa">Сколько добавить</div>
    <div>
      <input v-model="nof">
    </div>
    <button
        @click="tof"
        class="aa"
    >
      Добавить
    </button>
    <h3>Место для добавления</h3>
    <ol>
      <li
          v-for="daf in fof"
          class="maf"
      >
        <u>{{ daf}}</u>
      </li>
    </ol>
  </div>
</template>


<style scoped>
h3 {
  font-size: 28px;
}

.sa {
  position: absolute;
}

.wa {
  position: absolute;
  left: 50%;
}

.waf {
  color: limegreen;
  font-size: 18px;
}

.maf {
  color: red;
  font-size: 20px;
}

.xa {
  font-size: 18px;
}

.aa {
  font-size: 16px;
}
</style>