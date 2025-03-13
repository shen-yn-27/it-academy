<script setup>
import { ref } from "vue";

</script>

<template>
  <div>
    <button>Создать 5 цифр (начиная с 0)</button>
  </div>
  <br>
  <div>
    <button>Создать 5 цифр (начиная с 1)</button>
  </div>
  <br>
  <div>
    <button>Создать 10 цифр (начиная с 0)</button>
  </div>
  <br>
  <div>
    <button>Создать 10 цифр (начиная с 1)</button>
  </div>
  <br>
  <div>
    <button>Создать 10 цифр (начиная с 0 с шагом 2)</button>
  </div>
  <br>
  <div>
    <button>Создать 10 цифр (начиная с 1 с шагом 2)</button>
  </div>
  <br>
  <div>
    <button>Создать 20 цифр (начиная с 1, каждая чётная - красная)</button>
  </div>
</template>

<style scoped>
button {
  font-size: 22px;
}
</style>