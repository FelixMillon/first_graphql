<template>
  <div class="detail-container page-content">
    <h1>Détails du Personnage</h1>
    <div v-if="item">
      <h2>{{ item.name }}</h2>
      <img :src="item.image" alt="Image du personnage" style="width: 100%; max-width: 400px;">
      <p><strong>Status:</strong> {{ item.status }}</p>
      <p><strong>Species:</strong> {{ item.species }}</p>
      <p><strong>Type:</strong> {{ item.type || "N/A" }}</p>
      <p><strong>Gender:</strong> {{ item.gender }}</p>
      <p><strong>Origin:</strong> {{ item.origin.name }}</p>
      <p><strong>Location:</strong> {{ item.location.name }}</p>
      <div>
        <strong>Episodes:</strong>
        <ul>
          <li v-for="episode in item.episode" :key="episode">{{ episode }}</li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Chargement des détails...</p>
    </div>
    <router-link to="/" class="back-button">Retour à l'accueil</router-link>
  </div>
</template>

<script>
import rickAndMortyData from '@/assets/data.json';
export default {
  name: 'DetailView',
  props: ['id'],
  data() {
    return {
      item: null
    };
  },
  mounted() {
    this.loadItemDetails();
  },
  methods: {
    loadItemDetails() {
      this.item = rickAndMortyData.results.find(item => item.id === parseInt(this.id));
    }
  }
}
</script>

<style scoped>
.detail-container p,
.detail-container ul {
  margin: 10px 0;
}

.detail-container ul {
  list-style-type: none;
  padding-left: 20px;
}

.detail-container li {
  line-height: 1.6;
}
</style>
