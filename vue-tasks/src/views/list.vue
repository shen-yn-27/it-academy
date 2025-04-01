<script setup>
import { ref } from "vue";
let raf = ref('')
let faf = ref([])


function taf() {
  faf.value.push(raf.value)
}

function deleteCompany(index) {
  faf.value.splice(index, 1)
}

function f() {
  faf.statys = a
}
</script>

<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>Список задач</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input
            v-model="raf"
            type="text"
            placeholder="Новая задача"
        />
        <button
            @click="taf"
        >+</button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <li
              v-for="name in faf"
          >
            <button
                @click="f"
            >
              {{ name}}
            </button>
            <button @click.stop="deleteCompany(index)"
            >X</button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button>Удалить выполненные</button>
        <button>Удалить все</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Ожидают выполнения:</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.a {
  text-decoration: line-through;
}
</style>