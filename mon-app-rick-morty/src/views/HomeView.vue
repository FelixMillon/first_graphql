<template>
  <div class="home-container">
    <h1 class="home-title">Bienvenue sur mon Projet de Développement Durable</h1>
    <div class="questions-overview">
      <h2 class="overview-title">Liste des Éléments</h2>
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
export default {
  name: 'HomeView',
  data() {
    return {
      items: [
        { id: 1, name: 'Produit A', image: 'lien-vers-image-a.jpg' },
        { id: 2, name: 'Produit B', image: 'lien-vers-image-b.jpg' },
      ]
    }
  }
}
</script>
