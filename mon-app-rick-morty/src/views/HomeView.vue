<template>
  <div class="home-container page-content">
    <h1 class="home-title">Rick & Morty</h1>
    <div class="questions-overview">
      <h2 class="overview-title">Liste des Personnages</h2>
      <ul class="questions-list">
        <li v-for="item in items" :key="item.id">
          <router-link :to="{ name: 'detail', params: { id: item.id }}">
            <img :src="item.image" alt="" style="width: 50px; height: auto;"> {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import rickAndMortyData from '@/assets/data.json';
export default {
  name: 'HomeView',
  data() {
    return {
      items: rickAndMortyData.results
    }
  }
}
</script>
