<script setup>
import { ref } from "vue";
let raf = ref('')
let faf = ref([])

function taf() {
  faf.value.push(raf.value)
}

let rof = ref('')
let fof = ref([])

function tof() {
  fof.value.push(rof.value)
}
</script>

<template>
  <div class="sa">
    <h3>Имена</h3>
    <input v-model="raf">
    <button
        @click="taf"
    >
      Добавить
    </button>
    <h3>Место для добавления</h3>
    <ul>
      <li
          v-for="name in faf"
      >
        {{ name}}
      </li>
    </ul>
  </div>

  <div class="wa">
    <h3>Города</h3>
    <input v-model="rof">
    <button
        @click="tof"
    >
      Добавить
    </button>
    <h3>Место для добавления</h3>
    <ol>
      <li
          v-for="daf in rof"
      >
        {{ daf}}
      </li>
    </ol>
  </div>
</template>

<style scoped>

</style>