<script setup>
import {ref} from 'vue'
import axios  from "axios";

let API_KEY = 'ba0235c4d6ba3983024e60f0b3143eddf61513a8'

let search = ref ('')
let companies = ref([])

async function getCompanies(){
  let url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party'

  let data = {
    query: search.value,
  }

  let options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token ' + API_KEY
    }
  }

  let response = await axios.post(url, data, options)
  companies.value = response.data.suggestions
}
</script>

<template>
  <div class="app">
    <div class="companies-card">
      <h1 class="card-title">
        Поиск организации
      </h1>

      <div class="search-form">
        <input
            v-model="search"
            placeholder="Напишите название организации"
            class="search-input"
            @keyup.enter="getCompanies"
        >


      <button class="search-button"
              @click="getCompanies"
      >
        Найти
      </button>
      </div>
    <div class="companies-list">
      <div class="companies-title">
        Найденные организации:
      </div>

       <div
           v-if="companies.length > 0"
           class="companies"
       >
      <div
        v-for="(company, index) in companies"
        :class="{
          'active-company': company.data.state.status === 'ACTIVE',
          'inactive-company': company.data.state.status !== 'ACTIVE'
        }"
        class="company"
      >
        <div class="company-name">
          {{ index + 1 }}. {{ company.value }}
        </div>
        <div class="company-inn">
          ИНН: {{ company.data.inn }}
        </div>
        <div class="company-address">
          Адрес: {{ company.data.address.value }}
        </div>
      </div>
       </div>

      <div v-else>
        Напишите название организации в текстовое поле и нажмите на кнопку "Найти"
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active-company{
  background-color: #e3ffd4;
}
.inactive-company{
  background-color: #ffd4d4;
}

</style>
