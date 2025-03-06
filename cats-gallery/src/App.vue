<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";


let images = ref([]);


let currentIndex = ref(-1)


let currentImage = computed(() => {
  return images.value[currentIndex.value] || ''
})


function goBack() {

  currentIndex.value = currentIndex.value - 1
}


function goNext() {
  if (currentIndex.value === images.value.length - 1) {
    getImage()
  }
  else {
    currentIndex.value = currentIndex.value + 1
  }
  }


async function getImage() {
  if (onclick(cats)) {
    let response = await axios.get('https://api.thecatapi.com/v1/images/search')
    console.log(response.data)

    let newImage = response.data[0].url

    images.value.push(newImage)

    currentIndex.value = images.value.length - 1
}
  else {
    let response = await axios.get('https://api.thedogapi.com/v1/images/search')
    console.log(response.data)

    let newImage = response.data[0].url

    images.value.push(newImage)

    currentIndex.value = images.value.length - 1
  }
}

onMounted( () => {
  getImage()
})
</script>

<template>
  <div class="ani">
    <button class="cats">коты</button>
    <button class="dogs">собаки</button>
  </div>

  <div class="pets-slider">
    <button
        v-if="currentIndex > 0"
        class="button-prev"
        @click="goBack"
    >
      <-
    </button>

    <img
        :src="currentImage"
        alt="Фото с котиком"
        class="pet-image"
    >

    <button
        class="button-next"
        @click="goNext"
    >
      ->
    </button>
  </div>
</template>

<style scoped>

</style>
