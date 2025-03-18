<script setup>
import { ref } from "vue";

let we = ref('')

function f() {
  for (let i = 0; i < 5; i = i + 1) {
    we.value = we.value + i
  }
}

let w = ref('')

function f1() {
  for (let i = 1; i < 6; i = i + 1) {
    w.value = w.value + i
  }
}

let ew = ref('')

function f2() {
  for (let i = 0; i < 10; i = i + 1) {
    ew.value = ew.value + i
  }
}

let ww = ref('')

function f3() {
  for (let i = 1; i < 11; i = i + 1) {
    ww.value = ww.value + i
  }
}

let wq = ref('')

function f4() {
  for (let i = 0; i < 20; i = i + 2) {
    wq.value = wq.value + i
  }
}

let wl = ref('')

function f5() {
  for (let i = 1; i < 21; i = i + 2) {
    wl.value = wl.value + i
  }
}

let wi = ref('')

function f6() {
  for (let i = 1; i < 21; i++) {
    wi.value = wi.value + i
  }
}

</script>

<template>
  <div>
    <button
    @click="f"
    >Создать 5 цифр (начиная с 0)</button>
    {{ we }}
  </div>
  <br>
  <div>
    <button
    @click="f1"
    >Создать 5 цифр (начиная с 1)</button>
    {{ w }}
  </div>
  <br>
  <div>
    <button
    @click="f2"
    >Создать 10 цифр (начиная с 0)</button>
    {{ ew }}
  </div>
  <br>
  <div>
    <button
    @click="f3"
    >Создать 10 цифр (начиная с 1)</button>
    {{ ww }}
  </div>
  <br>
  <div>
    <button
        @click="f4"
    >Создать 10 цифр (начиная с 0 с шагом 2)</button>
    {{ wq }}
  </div>
  <br>
  <div>
    <button
        @click="f5"
    >Создать 10 цифр (начиная с 1 с шагом 2)</button>
    {{ wl }}
  </div>
  <br>
  <div>
    <button
        @click="f6"
    >Создать 20 цифр (начиная с 1, каждая чётная - красная)</button>
    <span
        v-for="i in wi"
        :class="{ 'red' : i%2===0}"
    >
    {{ i }}
    </span>
  </div>
</template>

<style scoped>
button {
  font-size: 22px;
}
div {
  font-size: 22px;
}
.red {
  color: red;
}
</style>