<script setup>
import {computed, ref} from "vue";
let raf = ref('')
let faf = ref([])

let ee = computed(() => {
  let s = 0
  for (let i = 0; i < faf.value.length ; i++) {
    let q = faf.value[i]
    if (q.status === 'a'){
      s = +s + 1
    }
  }
  return s
})

function taf() {
  faf.value.push(raf.value)
}

function deleteCompany(index) {
  faf.value.splice(index)
}

function f() {
  faf.value.splice(raf.value, 1)
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
      <div class="taskItems"
      >
        <ul>
          <li
              v-for="(index, name) in faf"
          >
            <button
            >
               {{ name + 1 }}. {{ index }}
            </button>
            <button
                @click="f(index)"
            >X</button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button>Удалить выполненные</button>
        <button
            @click.stop="deleteCompany(index)"
        >Удалить все</button>
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