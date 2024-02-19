<template>
  <div class="detail-container">
    <h1>Détails du Produit</h1>
    <div v-if="item">
      <h2>{{ item.name }}</h2>
      <img :src="item.image" alt="Image du produit" style="width: 100%; max-width: 400px;">
      <p>Ceci est une description détaillée de {{ item.name }}.</p>
    </div>
    <div v-else>
      <p>Chargement des détails...</p>
    </div>
  </div>
  <router-link to="/" class="back-button">Retour à l'accueil</router-link>
</template>

<script>
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
      const items = [
        { id: 1, name: 'Produit A', image: 'lien-vers-image-a.jpg' },
        { id: 2, name: 'Produit B', image: 'lien-vers-image-b.jpg' },
      ];
      
      this.item = items.find(item => item.id === parseInt(this.$route.params.id));
    }
  }
}
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.back-button {
  display: inline-block;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
